'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Buffet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Buffet.belongsTo(models.Branch, {
        sourceKey: 'id',
        foreignKey: 'branch_id',
      });
    }
  }
  Buffet.init(
    {
      branch_id: DataTypes.INTEGER,
      plan_name: DataTypes.STRING,
      max_capacity: DataTypes.INTEGER,
      current_capacity: DataTypes.INTEGER,
      on_demand: DataTypes.BOOLEAN,
      price: DataTypes.DECIMAL,
      day: DataTypes.STRING,
      start_time: DataTypes.TIME,
      end_time: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: 'Buffet',
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  );
  return Buffet;
};
