'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('pessoas', [
      {nome: 'Gabriel', sobrenome: 'Diniz', idade: 16, altura:'1,69'},
      {nome: 'Isabela ', sobrenome: 'Mendes', idade: 16, altura:'1,55'},
      {nome: 'Any ', sobrenome: 'Satos', idade: 16, altura:'1,51'},
      {nome: 'Karen ', sobrenome: 'Decleva', idade: 16, altura:'1,63'},
      {nome: 'Izabella ', sobrenome: 'Miranda', idade: 17, altura:'1,58'},
      {nome: 'Isabela ', sobrenome: 'Gualberto', idade: 17, altura:'1,53'},
      {nome: 'Karina ', sobrenome: 'Decleva', idade: 16, altura:'1,63'},
      {nome: 'Vitória ', sobrenome: 'Medeiros', idade: 16, altura:'1,05'},
            
    ], {});
},


  async down (queryInterface, Sequelize) {
  }
};
