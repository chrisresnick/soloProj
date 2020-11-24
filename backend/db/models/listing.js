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
      Listing.hasMany(models.ExtraPhoto, { foreignKey: 'listingId'});
      Listing.hasMany(models.Cart, {foreignKey: "listing"});
      Listing.hasOne(models.Coordinate, {foreignKey: "listingId"});
    }
  };
  Listing.init({
    seller: DataTypes.INTEGER,
    title: DataTypes.STRING(150),
    description: DataTypes.TEXT,
    photo: DataTypes.TEXT,
    priceCents: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Listing',
  });
  return Listing;
};
