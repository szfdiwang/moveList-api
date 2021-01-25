const { Sequelize, Model, DataTypes } = require("sequelize");
const { db } = require("../db"); //就是sequelize连接的数据库实例
/**
 * 1.直接调用sequelize.define(modelName,  attributes, options)方法。
 * 2.继承Model并且调用init(attributes，options)方法。
 */

const Movie = db.define(
  "movie",
  {
    name: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    releaseTime: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
  },
  {
    // 其他模型参数
    sequelize: db,
    // freezeTableName: true,//是否自动改名
  }
);

// `sequelize.define` 会返回模型
// Movie.sync({
//   force: true,
// }).then(() => {
//   return Movie.create({
//     name: "大红包",
//     releaseTime: "2021-01-22",
//     type: "喜剧/爱情",
//   });
// });

module.exports = Movie;
