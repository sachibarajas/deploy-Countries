const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('activity', {
        id:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        difficulty:{
          type: DataTypes.INTEGER,
          allowNull: false
        },
        duration:{
          type: DataTypes.INTEGER,
          allowNull: false
        },
        season:{
          type: DataTypes.ENUM('Summer','Fall','Winter','Spring'),
          allowNull: false
        }
      },{
        timestamps: false,  
      });
}