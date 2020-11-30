'use strict';

const { Listing } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Coordinates', [{
        listingId: (await Listing.findOne({where:{title: "Great Falls Climbing Trip"}})).id,
        latitude: 38.9987,
        longitude: -77.2539,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        listingId: (await Listing.findOne({where:{title: "Liberty Bell Mountain"}})).id,
        latitude: 48.5154,
        longitude: -120.6579,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        listingId: (await Listing.findOne({where:{title: "Seneca Rocks Trip"}})).id,
        latitude: 38.834722,
        longitude: -79.366111,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        listingId: (await Listing.findOne({where:{title: "Disappointment Cleaver"}})).id,
        latitude: 46.852886,
        longitude: -121.760374,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('Coordinates', null, {});

  }
};
