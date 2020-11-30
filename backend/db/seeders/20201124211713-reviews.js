'use strict';
const {User} = require("../models")
module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Reviews', [
      {
        rating: 4,
        forUser: (await User.findOne({where: {username: 'FakeUser1'}})).id,
        fromUser: (await User.findOne({where: {username: 'Demo-lition'}})).id,
        review: "A great guide! Saved me from a mountain goat!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        rating: 5,
        forUser: (await User.findOne({where: {username: 'Fake Seneca Rocks Guides'}})).id,
        fromUser: (await User.findOne({where: {username: 'FakeUser1'}})).id,
        review: "Scary climb, nice view!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        rating: 1,
        forUser: (await User.findOne({where: {username: 'Fake American Alpine Institute'}})).id,
        fromUser: (await User.findOne({where: {username: 'FakeUser1'}})).id,
        review: "Too cold. I blame my guide for the existance of snow!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Reviews', null, {});

  }
};
