const { Activity, Country } = require('../db');


const createActivity = async (name,season,difficulty,duration, countries)=>{
    const newActivity = await Activity.create({name,season,difficulty,duration}); 
    countries.map(async (country) => {
        const newCountry = await Country.findByPk(country);
        newActivity.addCountry(newCountry)
    })
    return newActivity; 
} 
    

const getActivities = async () =>{
    const activities = Activity.findAll({include:{
        model: Country,
        attributes: ['name','flag'],
        through: {
            attributes:[]
        }
    }});
    return activities;
}

const activitiesInit = async (activities)=>{
    activities.map( async (activity) =>{
        createActivity(
            activity.name,
            activity.season,
            activity.difficulty,
            activity.duration,
            activity.countries
            )
    })
}

module.exports ={createActivity, activitiesInit, getActivities}