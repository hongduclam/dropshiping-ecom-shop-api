const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class InventoryProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  }
  InventoryProducts.init({
    productId: DataTypes.INTEGER,
    availableQuantity: DataTypes.INTEGER,
    incomingQuantity: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'InventoryProducts',
  });
  return InventoryProducts;
};
