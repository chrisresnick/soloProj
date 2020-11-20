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
        }
  ], {});

  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('Listings', null, {});

  }
};
