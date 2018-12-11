const MongoClient = require('mongodb').MongoClient;

const {
  MONGO_URL,
  DB_NAME,
  COLLECTION_NAME,
  USER_COLLECTION_NAME
} = require('./constants');

const readUsers = () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(
      MONGO_URL,
      { useNewUrlParser: true },
      function(err, client) {
        if (err) {
          console.error(err);
          reject();
          return;
        }
        const db = client.db(DB_NAME);
        const collection = db.collection(USER_COLLECTION_NAME);

        collection.find({}).toArray(function(err, users) {
          if (err) {
            console.error(err);
            reject();
            return;
          }

          resolve(users);

          client.close();
        });
      }
    );
  });
};

const readCurrIndex = () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(
      MONGO_URL,
      { useNewUrlParser: true },
      function(err, client) {
        if (err) {
          console.error(err);
          reject();
          return;
        }
        const db = client.db(DB_NAME);
        const collection = db.collection(COLLECTION_NAME);

        collection.findOne({ key: 'index' }, function(err, indexDoc) {
          if (err) {
            console.error(err);
            reject();
            return;
          }

          resolve(indexDoc.value);
          client.close();
        });
      }
    );
  });
};

const writeCurrIndex = index => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(
      MONGO_URL,
      { useNewUrlParser: true },
      function(err, client) {
        if (err) {
          console.error(err);
          reject();
          return;
        }

        const db = client.db(DB_NAME);
        const collection = db.collection(COLLECTION_NAME);

        const newIndex = { $set: { value: index } };
        collection.updateOne({ key: 'index' }, newIndex, function(err) {
          if (err) {
            console.error(err);
            reject();
            return;
          }

          client.close();
          resolve();
        });
      }
    );
  });
};

module.exports = {
  readUsers,
  readCurrIndex,
  writeCurrIndex
};
