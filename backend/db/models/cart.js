'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cart.belongsTo(models.User, {foreignKey: "user"});
      Cart.belongsTo(models.Listing, {foreignKey: "listing"});
    }
  };
  Cart.init({
    user: DataTypes.INTEGER,
    listing: DataTypes.INTEGER,
    participants: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};
