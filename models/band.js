'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Band.init({
    band_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    available_start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Band',
    tableName: 'band',
    timestamps: false
  });
  return Band;
}

// An alternative way to do it ////
// // DEPENDENCIES
// const { Sequelize, DataTypes,  Model } = require('sequelize')
// // const sequelize = new Sequelize(process.env.PG_URI)

// // MODEL
// class Band extends Model{}

// Band.init({
//     band_id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     genre: {
//         type: DataTypes.TEXT,
//         allowNull: false
//     },
//     available_start_time: {
//         type: DataTypes.DATE,
//         allowNull: false
//     },
//     end_time: {
//         type: DataTypes.DATE,
//         allowNull: false
//     },
// }, {sequelize,
//     modelName: 'Band',
//     tableName: 'band',
//     timestamps: false})

// // EXPORT
// module.exports = Band
