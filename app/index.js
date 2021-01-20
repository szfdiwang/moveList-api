const Koa = require("koa");
const cors = require("koa2-cors"); /* 跨域必需模块 */
const bodyParser = require("koa-bodyparser"); /* POST请求必需模块 */
const Router = require("koa-router");
// 初始化路由实例
const router = new Router();
const app = new Koa();
/*使用跨域和参数解析中间件 */
app.use(cors());
app.use(bodyParser());

router.get("/banana", (ctx, next) => {
  ctx.body = "banana";
});

/*使用路由中间件*/
app.use(router.routes()).use(router.allowedMethods());
app.listen(9000);
