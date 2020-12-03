import productRoute from './product.router';


const routers = [
  productRoute
]

export function initRouters(app) {
  routers.forEach((router) => {
    app.use('/api/v1', router);
  });
}
