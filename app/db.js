const Sequelize = require("sequelize");
const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD, force } = require("./config/db").database;
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "mysql",
  timezone: "+08:00",
  logging: false,
  pool: {
    max: 10,
    min: 0,
    idle: 1000,
  },
  define: {
    // freezeTableName: true, //禁止自动修改表名
    timestamps: true, //添加 createdAt 和 updatedAt 两个时间戳字段
  },
  dialectOptions: {
    // 自动化时间格式 将date转为
    dateStrings: true,
    typeCast: true,
  },
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

sequelize.sync({ force }); //.then(res => {});

module.exports = {
  db: sequelize,
};
