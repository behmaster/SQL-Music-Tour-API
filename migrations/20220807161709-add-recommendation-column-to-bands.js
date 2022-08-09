module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("band", "recommendation", {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("band", "recommendation");
  },
};
