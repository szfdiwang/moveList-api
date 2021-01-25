const KoaRouter = require("koa-router");
const movie = require("./controller/v1").movie;

const MovieRouter = new KoaRouter({
  prefix: "/v1",
});

MovieRouter.get("/test", movie.test);
MovieRouter.get("/queryMovieByName", movie.queryMovieByName);
MovieRouter.post("/addMovie", movie.addMovie);
MovieRouter.post("/singleCreateMovie", movie.singleCreateMovie);
MovieRouter.post("/deleteMovie", movie.deleteMovie);
MovieRouter.post("/bathCreateMovie", movie.bathCreateMovie);

const router = new KoaRouter();
router.use("", MovieRouter.routes(), MovieRouter.allowedMethods());

module.exports = router;
