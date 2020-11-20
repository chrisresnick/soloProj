'use strict';
const {Listing} = require("../models/index")

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('ExtraPhotos', [{
        listingId: (await Listing.findOne({where: {title: "Great Falls Climbing Trip"}})).id,
        photo: "https://upload.wikimedia.org/wikipedia/commons/1/19/GreatFallsPotomocRiverWinter.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('ExtraPhotos', null, {});
  }
};
