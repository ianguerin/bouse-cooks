const moment = require('moment');

const { DATE_FORMAT, START_ISO } = require('./constants');

const getCookingDateThisWeek = day =>
  moment()
    .day(day)
    .format(DATE_FORMAT);

const getCookingDateOnWeek = (day, week) =>
  moment(START_ISO)
    .add(week.actualWeek, 'week')
    .day(day)
    .format(DATE_FORMAT);

const isTodaySunday = () => moment().day() === 0;

const isTodayFriday = () => moment().day() === 5;

const getDay = () => moment().format(DATE_FORMAT);

module.exports = {
  getCookingDateThisWeek,
  getCookingDateOnWeek,
  isTodaySunday,
  isTodayFriday,
  getDay
};
