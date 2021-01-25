module.exports = {
  database: {
    DB_HOST: process.env.DB_HOST || "192.168.18.34",
    DB_PORT: process.env.DB_PORT || 3306,
    DB_PASSWORD: process.env.DB_PASSWORD || "123456",
    DB_USER: process.env.DB_USER || "root",
    DB_NAME: process.env.DB_NAME || "movie",
    force: false,
    debug: false,
  },
};
