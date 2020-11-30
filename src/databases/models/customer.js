'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customer.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    addressFirstname: DataTypes.STRING,
    addressLastName: DataTypes.STRING,
    addressCompany: DataTypes.STRING,
    addressCity: DataTypes.STRING,
    addressCountry: DataTypes.STRING,
    addressPostalCode: DataTypes.STRING,
    addressPhone: DataTypes.STRING,
    notes: DataTypes.STRING,
    isAgreeMaketingMail: DataTypes.BOOLEAN,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};
