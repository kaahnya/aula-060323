'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('pessoas', [
    {
     nome: 'kakah1',
     sobrenome:'fofa1',
     idade:'16',
     altura:'1.65'
    },
    {
      nome: 'kakah2',
     sobrenome:'fofa2',
     idade:'16',
     altura:'1.65'
    },
    {
      nome: 'kakah3',
     sobrenome:'fofa3',
     idade:'16',
     altura:'1.65'
    },
    {
      nome: 'kakah4',
     sobrenome:'fofa4',
     idade:'16',
     altura:'1.65'
    },
    {
      nome: 'kakah5',
      sobrenome:'fofa5',
      idade:'16',
      altura:'1.65'
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('pessoas', null, {});
  }
};
