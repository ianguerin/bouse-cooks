const db = require('./db');

const updateEggCounter = async name => {
  try {
    await db.addEgg(name);
  } catch (e) {
    console.error('did not add egg', e);
  }
};

module.exports = {
  updateEggCounter
};
