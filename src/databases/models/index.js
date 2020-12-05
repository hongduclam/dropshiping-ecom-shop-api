const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

function dbLogging(msg) {
  console.log({ msg });
  // dbLog.info(msg);
  // dbLog.info(`Timed: ${time} ms`);
}

const pool = {
  max: 50,
  min: 0,
  acquire: 30000,
  idle: 10000
};

const dialectOptions = {
  decimalNumbers: true
};
const db = {};

const extendConfig = {
  ...config,
  logging: dbLogging,
  pool,
  dialectOptions
};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], extendConfig);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, extendConfig);
}

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file) => {
    // eslint-disable-next-line global-require,import/no-dynamic-require
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
