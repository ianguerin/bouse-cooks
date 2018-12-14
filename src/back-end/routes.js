const path = require('path');
const multer = require('multer');

const weekly = require('./weekly');

const constructRoutes = app => {
  app.get('/api/week/:week?', async (req, res) => {
    if (process.env.PAUSE_FOR_HOLIDAY) {
      res.send({ isHoliday: true });
      return;
    }
    const week = Number.isNaN(Number.parseInt(req.params.week))
      ? -1
      : Number.parseInt(req.params.week);
    const responseValue = await weekly.getDigest(week);

    res.send({ digests: responseValue });
  });

  app.post('/api/sendgrid/incoming', multer().any(), (req, res) => {
    console.log('/api/sendgrid/incoming');
    console.log(req.body);

    res.sendStatus(200);
  });

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '/dist/index.html'));
  });
};

module.exports = {
  constructRoutes
};
