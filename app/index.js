const Koa = require("koa");
const cors = require("koa2-cors"); /* 跨域必需模块 */
const bodyParser = require("koa-bodyparser"); /* POST请求必需模块 */
// const systemConfig = require("./config").system;
// 初始化路由实例

const baseRouter = require("./router");
const app = new Koa();
/*使用跨域和参数解析中间件 */
app.use(cors());
app.use(bodyParser());


app.use(baseRouter.routes()).use(baseRouter.allowedMethods());
/*使用路由中间件*/
app.listen(9999);
