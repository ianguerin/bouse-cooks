const weekly = require('../weekly');

if (!process.env.PAUSE_FOR_HOLIDAY) {
  weekly.sendMail();
} else {
  console.warn("not running weekly alert, it's a holiday");
}
