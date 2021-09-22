'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Buffets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      branch_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      plan_name: {
        type: Sequelize.STRING,
      },
      max_capacity: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      current_capacity: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      on_demand: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      price: {
        type: Sequelize.DECIMAL,
        defaultValue: 0,
      },
      day: {
        type: Sequelize.ENUM([
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ]),
      },
      start_time: {
        type: Sequelize.TIME,
      },
      end_time: {
        type: Sequelize.TIME,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Buffets');
  },
};
