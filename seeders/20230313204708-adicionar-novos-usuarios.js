'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('pessoas', [
    {
     nome: 'kakah',
     sobrenome:'fofa',
     idade:'16',
     altura:'1.65'
    },

    {
      nome: 'lucas',
      sobrenome:'silva',
      idade:'16',
      altura:'1.65'
     },

     {
      nome: 'ana',
      sobrenome:'fofa',
      idade:'16',
      altura:'1.65'
     },

     {
      nome: 'paulo',
      sobrenome:'silva',
      idade:'16',
      altura:'1.65'
     }
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('pessoas', null, {});
  }
};
