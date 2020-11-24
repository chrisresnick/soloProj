'use strict';
const {User} = require("../models")
module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Reviews', [{
        rating: 4,
        forUser: (await User.findOne({where: {username: 'FakeUser1'}})).id,
        fromUser: (await User.findOne({where: {username: 'Demo-lition'}})).id,
        review: "A great guide! Saved me from a mountain goat!",
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Reviews', null, {});

  }
};
