const date = require('./date');
const meal = require('./meal');
const mail = require('./mail');
const db = require('./db');
const { DAYS, COOKING_ORDER, MAX_POSSIBLE_WEEKS } = require('./constants');

// negative numbers don't work quite right
const getWeek = async (uncheckedRequestedWeek = -1) => {
  const requestedWeek = Math.max(-1, uncheckedRequestedWeek);
  const actualWeek =
    requestedWeek < 0
      ? Math.max(0, requestedWeek + (await db.readCurrIndex()))
      : requestedWeek;

  return {
    moddedWeek: actualWeek % MAX_POSSIBLE_WEEKS,
    actualWeek
  };
};

const getDigest = async requestedWeek => {
  const week = await getWeek(requestedWeek);

  const weeklyDigest = DAYS.map(async (day, i) => {
    const orderIndex = i + week.moddedWeek * 2;
    const cookingDate = date.getCookingDateOnWeek(day.dayOfWeek, week);

    const userMap = {};
    try {
      (await db.readUsers()).forEach(user => {
        userMap[user.key] = user;
      });
    } catch (e) {
      console.error(e);

      return;
    }

    const cooks = COOKING_ORDER[orderIndex].map(key => userMap[key]);
    const suggestions = await meal.getSuggestions(orderIndex + 1);

    return {
      date: cookingDate,
      cooks,
      suggestions,
      ...week
    };
  });

  return await Promise.all(weeklyDigest);
};

const sendMail = async () => {
  const isSunday = date.isTodaySunday();
  const isFriday = date.isTodayFriday();
  if (!isSunday && !isFriday) {
    console.warn(
      `Not sending emails, as it is not Friday or Sunday; it is ${date.getDay()}`
    );

    return;
  }

  const currWeek = await db.readCurrIndex();
  const weeklyDigest = await getDigest(currWeek);

  await Promise.all(
    weeklyDigest.map(async digest => await mail.send(mail.createMail(digest)))
  );

  if (isSunday) {
    await db.writeCurrIndex(currWeek + 1);
  }
};

module.exports = {
  getDigest,
  sendMail
};
