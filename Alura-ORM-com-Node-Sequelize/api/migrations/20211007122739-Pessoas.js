"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn("pessoas", "node", "nome");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn("pessoas", "nome", "node");
  },
};
