'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Listing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Listing.belongsTo(models.User, {foreignKey: "seller"});
    }
  };
  Listing.init({
    seller: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    photo: DataTypes.TEXT,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Listing',
  });
  return Listing;
};
