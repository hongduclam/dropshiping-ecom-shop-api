import productRouter from './productRouter';


const routers = [
  productRouter
]

export function initRouters(app) {
  routers.forEach((router) => {
    app.use('/v1/api', router);
  });
}
