const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.ProductMedia, {
        foreignKey: 'productMediaId'
      });
      this.hasOne(models.ProductType, {
        foreignKey: 'productTypeId'
      });
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.STRING,
    productTypeId: DataTypes.INTEGER,
    sku: DataTypes.STRING,
    barcode: {
      type: DataTypes.STRING
    },
    isSellingWhenOutOfStock: {
      type: DataTypes.BOOLEAN
    },
    price: DataTypes.DECIMAL,
    comparePrice: DataTypes.DECIMAL,
    cost: DataTypes.DECIMAL,
    status: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
