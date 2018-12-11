const COOKING_ORDER = [
  ['B', 'C', 'E'],
  ['D', 'E', 'F'],
  ['A', 'B', 'C'],
  ['B', 'D', 'F'],
  ['A', 'C', 'F'],
  ['B', 'D', 'E'],
  ['A', 'C', 'D'],
  ['B', 'E', 'F'],
  ['A', 'C', 'E'],
  ['A', 'B', 'D'],
  ['C', 'E', 'F'],
  ['A', 'B', 'E'],
  ['C', 'D', 'F'],
  ['A', 'B', 'F'],
  ['C', 'D', 'E'],
  ['A', 'E', 'F'],
  ['B', 'C', 'D'],
  ['A', 'D', 'E'],
  ['B', 'C', 'F'],
  ['A', 'D', 'F']
];

const DAYS = [
  { text: 'Monday', dayOfWeek: 1 },
  { text: 'Wednesday', dayOfWeek: 3 }
];

const FROM = 'tim.the.robot@bouse.website';

const MAX_POSSIBLE_WEEKS = COOKING_ORDER.length / DAYS.length;

const MONGO_URL = `mongodb://${process.env.MONGO_UN}:${
  process.env.MONGO_PW
}@ds115244.mlab.com:15244/bousecook`;
const DB_NAME = 'bousecook';
const COLLECTION_NAME =
  process.env.NODE_ENV === 'production' ? 'docs_prod' : 'docs';

const USER_COLLECTION_NAME =
  process.env.NODE_ENV === 'production' ? 'users_prod' : 'users';

const DATE_FORMAT = 'dddd, MMMM Do';

const START_ISO = '2018-11-26T12:00:00-00:00';

module.exports = {
  COOKING_ORDER,
  DAYS,
  FROM,
  MAX_POSSIBLE_WEEKS,
  MONGO_URL,
  DB_NAME,
  COLLECTION_NAME,
  USER_COLLECTION_NAME,
  DATE_FORMAT,
  START_ISO
};
