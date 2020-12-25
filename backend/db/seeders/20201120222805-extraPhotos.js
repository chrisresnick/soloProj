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
        photo: "https://climbzy.s3.amazonaws.com/ccb80409-2b18-4a17-9b33-b3edef34c37d",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        listingId: (await Listing.findOne({where:{title: "Liberty Bell Mountain"}})).id,
        photo: "https://upload.wikimedia.org/wikipedia/commons/6/63/Early_Winters_Spires_and_Liberty_Bell.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        listingId: (await Listing.findOne({where:{title: "Seneca Rocks Trip"}})).id,
        photo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Seneca_East_Face.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        listingId: (await Listing.findOne({where:{title: "Seneca Rocks Trip"}})).id,
        photo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Seneca_southwest.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        listingId: (await Listing.findOne({where:{title: "Seneca Rocks Trip"}})).id,
        photo: "https://upload.wikimedia.org/wikipedia/commons/6/63/Seneca_Rock%2C_from_Seneca_Rocks_State_Park.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        listingId: (await Listing.findOne({where:{title: "Disappointment Cleaver"}})).id,
        photo: "https://climbzy.s3.amazonaws.com/f62ad5cd-6b1e-42dc-ae6f-ef12fa66bac0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        listingId: (await Listing.findOne({where:{title: "Disappointment Cleaver"}})).id,
        photo: "https://upload.wikimedia.org/wikipedia/commons/0/01/Mount_Rainier_over_Tacoma.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        listingId: (await Listing.findOne({where:{title: "Disappointment Cleaver"}})).id,
        photo: "https://upload.wikimedia.org/wikipedia/commons/3/38/M_Rainier.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('ExtraPhotos', null, {});
  }
};
