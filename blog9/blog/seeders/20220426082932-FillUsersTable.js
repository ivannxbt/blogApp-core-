'use strict';

var crypt = require('../helpers/crypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('users', [
     {
       username: 'admin',
       password: crypt.encryptPassword('1234', 'aaaa'),
       email: 'admin@core.example',
       salt: 'aaaa',
       isAdmin: true,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      username: 'pepe',
      password: crypt.encryptPassword('5678', 'bbbb'),
      email: 'pepe@core.example',
      salt: 'bbbb',
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('users', null, {});
  }
  
};
