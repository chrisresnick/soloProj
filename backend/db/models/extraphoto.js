'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExtraPhoto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ExtraPhoto.belongsTo(models.Listing, { foreignKey: 'listingId'});
    }
  };
  ExtraPhoto.init({
    listingId: DataTypes.INTEGER,
    photo: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'ExtraPhoto',
  });
  return ExtraPhoto;
};
