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
    const { id } = req.params;
    try {
      const product = await ProductService.getProduct(id, req.user);
      return res.status(HttpStatusCode.OK).json(product);
    } catch (error) {
      next(error)
    }
  }

  static async updatedProduct(req, res, next) {
    try {
      const updatedProduct = await ProductService.updateProduct(req.body, req.user);
      return res.status(HttpStatusCode.OK).json(updatedProduct);
    } catch (error) {
      next(error)
    }
  }

  static async deleteProduct(req, res, next) {
    const { id } = req.params;
    try {
      const deletedProduct = await ProductService.deleteProduct(id);
      return res.status(HttpStatusCode.OK).json(deletedProduct);
    } catch (error) {
      next(error)
    }
  }
}

export default ProductController;
