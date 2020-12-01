import ProductService from '../services/ProductService';
import {HttpStatusCode} from "../../constant";

class ProductController {
  static async searchProduct(req, res, next) {
    try {
      const searchedProducts = await ProductService.searchProduct(req.params, req.user);
      return res.status(HttpStatusCode.OK).json(searchedProducts);
    } catch (error) {
      next(error)
    }
  }

  static async createProduct(req, res, next) {
    try {
      const createdProduct = await ProductService.createProduct(req.body, req.user);
      return res.status(HttpStatusCode.CREATED).json(createdProduct);
    } catch (error) {
      next(error)
    }
  }

  static async getProduct(req, res, next) {
    console.log(" req.params", req.params)
    try {
      const { id } = req.params;
      const product = await ProductService.getProduct(id, req.user);
      return res.status(HttpStatusCode.OK).json(product);
    } catch (error) {
      next(error)
    }
  }

  static async updatedProduct(req, res, next) {
    try {
      const { id } = req.params;
      const updatedProduct = await ProductService.updateProduct(id, req.body, req.user);
      return res.status(HttpStatusCode.OK).json(updatedProduct);
    } catch (error) {
      next(error)
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const { id } = req.params;
      const deletedProduct = await ProductService.deleteProduct(id, req.user);
      return res.status(HttpStatusCode.OK).json(deletedProduct);
    } catch (error) {
      next(error)
    }
  }
}

export default ProductController;
