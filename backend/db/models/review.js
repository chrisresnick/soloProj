'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.User, {as: "author", foreignKey:"fromUser"});
      Review.belongsTo(models.User, {as: "seller", foreignKey:"forUser"});
    }
  };
  Review.init({
    rating: DataTypes.INTEGER,
    review: DataTypes.TEXT,
    fromUser: DataTypes.INTEGER,
    forUser: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
