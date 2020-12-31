module.exports = {
  HOST: 'localhost',
  USER: 'jonathan',
  PASSWORD: 'netninja56',
  DB: 'notes', 
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
