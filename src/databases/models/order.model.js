const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  }
  Order.init({
    orderNumber: DataTypes.STRING,
    orderDate: DataTypes.DATE,
    orderTotal: DataTypes.DECIMAL,
    paymentType: DataTypes.INTEGER,
    cartId: DataTypes.STRING,
    customerId: DataTypes.INTEGER,
    paymentStatus: DataTypes.INTEGER,
    fullfillmentStatus: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
