const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CollectionDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  }
  CollectionDetails.init({
    collectionId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CollectionDetails',
  });
  return CollectionDetails;
};
