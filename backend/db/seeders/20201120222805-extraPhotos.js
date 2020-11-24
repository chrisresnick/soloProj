'use strict';
const {Listing} = require("../models/index")

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('ExtraPhotos', [{
        listingId: (await Listing.findOne({where: {title: "Great Falls Climbing Trip"}})).id,
        photo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Great_Falls_National_Park_-_Lost_Arrow_%285.10%29_-_2.JPG",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        listingId: (await Listing.findOne({where:{title: "Liberty Bell Mountain"}})).id,
        photo: "https://i.ibb.co/hH1wynL/liberty-bell-climb.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        listingId: (await Listing.findOne({where:{title: "Liberty Bell Mountain"}})).id,
        photo: "https://upload.wikimedia.org/wikipedia/commons/6/63/Early_Winters_Spires_and_Liberty_Bell.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('ExtraPhotos', null, {});
  }
};
