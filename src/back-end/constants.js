const COOKING_ORDER = [
  ['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['B', 'C', 'E'],
  ['A', 'D', 'F'],
  ['B', 'D', 'E'],
  ['A', 'C', 'F'],
  ['B', 'C', 'D'],
  ['A', 'E', 'F'],
  ['A', 'C', 'D'],
  ['B', 'E', 'F'],
  ['A', 'C', 'E'],
  ['B', 'D', 'F'],
  ['C', 'E', 'F'],
  ['A', 'B', 'D'],
  ['B', 'C', 'F'],
  ['A', 'D', 'E'],
  ['A', 'B', 'F'],
  ['C', 'D', 'E'],
  ['A', 'B', 'E'],
  ['C', 'D', 'F']
];

const DAYS = [{ text: 'Wednesda', dayOfWeek: 3 }];

const FROM = 'tim.the.robot@bouse.website';

const MAX_POSSIBLE_WEEKS = COOKING_ORDER.length / DAYS.length;

const MONGO_URL = `mongodb://${process.env.MONGO_UN}:${
  process.env.MONGO_PW
}@ds115244.mlab.com:15244/bousecook`;
const DB_NAME = 'bousecook';
const COLLECTION_NAME =
  process.env.NODE_ENV === 'production' ? 'docs_prod' : 'docs';

const USER_COLLECTION_NAME = 'users';
const EGG_COLLECTION_NAME =
  process.env.NODE_ENV === 'production' ? 'eggs_prod' : 'eggs';

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
  EGG_COLLECTION_NAME,
  DATE_FORMAT,
  START_ISO
};
