const {createActivity, activitiesInit, getActivities} = require('../controllers/activitiesController')


const getActivitiesHandler= async (req,res)=>{
    try {
        const response = await getActivities();
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const createActivityHandler =async (req,res)=>{
    const {name,season,difficulty,duration, countries} = req.body;
    try {
        const newActivity = await createActivity(name,season,difficulty,duration, countries)
        res.status(201).json(newActivity)
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const activitiesInitHandler = async (req,res) =>{
    try {
        const activities = req.body;
        await activitiesInit(activities);
        res.status(200).json(activities)
    } catch (error) {
        res.status(400).json({error: error.message}); 
    }
}

module.exports={getActivitiesHandler,createActivityHandler, activitiesInitHandler}