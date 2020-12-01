import db from '../databases/models';
import {BadRequestError} from "../utils/ErrorUtils";

export default class ProductService {
  static async searchProduct({name, pagingQuery}, currentUser) {
    const where = {
      createdBy: currentUser.id
    };
    if(name) {
      where.name = name;
    }
    return db.Product.findAndCountAll(
      {
        where,
        ...pagingQuery
      }
    )
  }

  static async getProduct(id, currentUser) {
    const product = await db.Product.findOne({
      where: {
        id,
        createdBy: currentUser.id
      }
    });
    if(!product) {
      throw new BadRequestError('product.notfound', 'product not found')
    }
    return product;
  }

  static async createProduct(newProduct, currentUser) {
    const productCreateModel = {
      name: newProduct.name,
      description: newProduct.description,
      productTypeId: newProduct.productTypeId,
      sku: newProduct.sku,
      barcode: newProduct.barcode,
      isSellingWhenOutOfStock: newProduct.isSellingWhenOutOfStock || false,
      price: newProduct.price || 0,
      comparePrice: newProduct.comparePrice || 0,
      cost: newProduct.cost,
      status: newProduct.status,
      createdBy: currentUser.id,
      lastUpdatedBy: currentUser.id,
    };
    return db.Product.create(productCreateModel)
  }

  static async updateProduct(id, updateProduct, currentUser) {
    const product = await this.getProduct(id, currentUser);
    const productUpdateModel = {
      name: updateProduct.name,
      description: updateProduct.description,
      productTypeId: updateProduct.productTypeId,
      sku: updateProduct.sku,
      barcode: updateProduct.barcode,
      isSellingWhenOutOfStock: updateProduct.isSellingWhenOutOfStock || false,
      price: updateProduct.price || 0,
      comparePrice: updateProduct.comparePrice || 0,
      cost: updateProduct.cost,
      status: updateProduct.status,
      updatedBy: currentUser.id,
    };
    return product.update(productUpdateModel, {
      where: {
        id,
        createdBy: currentUser.id
      }
    })
  }

  static async deleteProduct(id, currentUser) {
    await this.getProduct(id, currentUser);
    return db.Product.destroy({
      where: {
        id,
        createdBy: currentUser.id
      }
    })
  }
}
