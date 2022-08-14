'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    static associate({ MeetGreet, SetTime }) {
      // meet and greets 
      Band.hasMany(MeetGreet, {
        foreignKey: "band_id",
        as: "meet_greets"
      })

      // meet and greets 
      Band.hasMany(SetTime, {
        foreignKey: "band_id",
        as: "set_times"
      })
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
