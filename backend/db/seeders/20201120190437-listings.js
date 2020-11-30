'use strict';

const {User} = require("../models/")

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Listings', [
        {
         title: "Great Falls Climbing Trip",
         seller: (await User.findOne({where: {username: 'Demo-lition'}})).id,
         description: "A day of climbing at Great Falls",
         photo: "https://upload.wikimedia.org/wikipedia/commons/1/19/GreatFallsPotomocRiverWinter.jpg",
         priceCents: 25000,
         createdAt: new Date(),
         updatedAt: new Date(),
        },
        {
         title: "Liberty Bell Mountain",
         seller: (await User.findOne({where: {username: 'FakeUser1'}})).id,
         description: "Climb the Becky Route on Liberty Bell in the North Cascades. Beutiful views and adventure at an easy 5.6.",
         photo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Liberty_Bell_Mountain_seen_from_Highway_20.jpg",
         priceCents: 75000,
         createdAt: new Date(),
         updatedAt: new Date(),
        },
        {
         title: "Seneca Rocks Trip",
         seller: (await User.findOne({where: {username: 'Fake Seneca Rocks Guides'}})).id,
         description: "A day of guided climimbing at Seneca Rocks. Massive exposure and fun climbing at moderate grades. A classic East-Coast climbing destination. Discuss routes with your guide.",
         photo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Seneca_Rocks_West_Virginia_USA.jpg",
         priceCents: 35000,
         createdAt: new Date(),
         updatedAt: new Date(),
        },
        {
         title: "Disappointment Cleaver",
         seller: (await User.findOne({where: {username: 'Fake American Alpine Institute'}})).id,
         description: "Climb the Most Popular Route on Rainier. 3 Days of climbing with 8000 feet of elevation gain over snow, ice, and rock. Includes two nights of camping.",
         photo: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Mount_Rainier_from_west.jpg",
         priceCents: 200000,
         createdAt: new Date(),
         updatedAt: new Date(),
        }
  ], {});

  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('Listings', null, {});

  }
};
