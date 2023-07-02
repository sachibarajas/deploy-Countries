const { DataTypes } = require('sequelize');
const Activity = require('./Activity');
const Country = require('./Country');

module.exports = (sequelize) => {
    sequelize.define('CountriesActivities', {
        countryId:{
          type: DataTypes.STRING,
          references:{
            model: Country,
            key: 'id'
          }
        },
        activityId: {
          type: DataTypes.INTEGER,
          references:{
            model: Activity,
            key: 'id'
          }
        }
      },{
        timestamps: true,
      });
}