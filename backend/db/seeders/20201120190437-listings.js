'use strict';

const {User} = require("../models/")

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Listings', [
        {
         title: "Great Falls Climbing Trip",
         seller: (await User.findOne({where: {username: 'Demo-lition'}})).id,
         description: "A day of climbing at Great Falls",
         photo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Great_Falls_National_Park_-_Lost_Arrow_%285.10%29_-_2.JPG",
         priceCents: 25000,
         createdAt: new Date(),
         updatedAt: new Date(),
        },
                {
         title: "Liberty Bell Mountain",
         seller: (await User.findOne({where: {username: 'FakeUser1'}})).id,
         description: "Climb Becky Route on Liberty Bell in the North Cascades",
         photo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Liberty_Bell_Mountain_seen_from_Highway_20.jpg",
         priceCents: 75000,
         createdAt: new Date(),
         updatedAt: new Date(),
        }
  ], {});

  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('Listings', null, {});

  }
};
