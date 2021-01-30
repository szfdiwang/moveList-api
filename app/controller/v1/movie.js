const movie = require("../../models").movie;
const { Op } = require("sequelize");
const sequelize = require("sequelize");

const test = async ctx => {
  // console.log("ctx ======>", ctx);
  ctx.body = "test success!!!";
  const movieList = await movie.findAll({});
  console.log(movieList);
};

const queryMovieByPage = async ctx => {
  console.log("ctx.request.body ======>", ctx.request.body);
  const body = ctx.request.body;
  const page = body.curPage;
  const size = body.pageSize;

  const list = await movie.findAll({
    order: [["id", "desc"]],
    limit: size,
    offset: (page - 1) * size,
  });
  ctx.body = list;
};

const addMovie = async ctx => {};

const queryMovieByName = async ctx => {
  ctx.body = "test success!!!";
  //  从ctx读取get传值
  console.log("ctx.params =========>", ctx.params);
  console.log("ctx.request.query =========>", ctx.request.query);
  console.log("ctx.query =========>", ctx.query);
  console.log("ctx.querystring =========>", ctx.querystring);
  console.log("ctx.url =========>", ctx.url);
  console.log("ctx.request.body ======>", ctx.request.body);
  // ctx.body = ctx.request.body;
  const name = ctx.query.name;
  const movieList = await movie.findAll({
    where: {
      name: {
        [Op.eq]: name,
      },
    },
  });
  console.log(movieList);
};

const findMovie = async ctx => {
  const name = ctx.query.name;
  const movieList = await movie.findAndCountAll({
    // where: {
    //   name: {
    //     [op.eq]: name,
    //   },
    // },
    // order: [["id", "ASC"]],
    // order: [sequelize.fn("max", sequelize.col("id"))],
    // group: "name",
    // offset: 2,
    // limit: 5,
    // order: [["id", "ASC"]],
    where: {
      name: {
        [Op.like]: "%人%",
      },
    },
    // offset: 3,
    limit: 10,
  });
  console.log(movieList);
  ctx.body = movieList;
};

const singleCreateMovie = async ctx => {
  const list = await movie.create({ name: "乱世佳人", releaseTime: "2021-01-25", type: "传记" });
  console.log(list);
};

const bathCreateMovie = async ctx => {
  const list = await movie.bulkCreate([
    { name: "天使爱美丽", releaseTime: "2021-01-25", type: "奇幻" },
    { name: "美丽人生", releaseTime: "2021-01-25", type: "战争" },
  ]);
  console.log(list);
};

const deleteMovie = async (ctx, next) => {
  const name = ctx.request.body.name;
  console.log(ctx.request.body);
  const list = await movie.destroy({
    where: {
      name: {
        [Op.eq]: name,
      },
    },
  });
  console.log(list);
};

module.exports = { test, queryMovieByPage, addMovie, queryMovieByName, singleCreateMovie, deleteMovie, bathCreateMovie, findMovie };
