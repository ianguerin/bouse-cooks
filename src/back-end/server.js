require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const PORT = process.env.PORT || 8080;

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.static('dist'));
app.use(bodyParser.json());

routes.constructRoutes(app);

app.listen(PORT, () => {
  console.log(`BOuSE app listening on port ${PORT}`);
});
