import productRouter from './productRouter';


const routers = [
  productRouter
]

export function initRouters(app) {
  routers.forEach((router) => {
    app.use('/api/v1', router);
  });
}
