const Koa = require("koa");
const serve = require("koa-static");
const path = require("path");

const app = new Koa();

const staticPath = path.join(__dirname, "static");

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  const date = ctx.response.get("Date");
  console.log(`${ctx.method} ${ctx.url} - ${rt} - ${date}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  const possibleCurrentTime = Date.now();
  const date = new Date(possibleCurrentTime);
  ctx.set("X-Response-Time", `${ms}ms`);
  ctx.set("Date", date.toDateString());
});
//midwler ctx üzerinden birbirleriyle konuşuyorlar istekten önce ve sonradan kasıt nedir hocaya sor
app.use(serve(staticPath));

app.listen(process.env.PORT, () => {
  console.log("Koa ile server dinlemede");
});
