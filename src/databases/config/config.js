module.exports = {
  development: {
    username: 'root',
    password: 'lamhong123!',
    database: 'ds_store',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: 'lamhong123!',
    database: 'ds_store_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
};
