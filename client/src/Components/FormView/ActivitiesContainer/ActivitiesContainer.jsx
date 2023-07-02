import s from './ActivitiesContainer.module.css';
import ActivityCard from '../ActivityCard/ActivityCard';

const ActivitiesContainer = ({activities})=>{

    return(
        <div className={s.ActivitiesContainer}>
            {
                activities.map(activity=>{
                    return <ActivityCard
                        name={activity.name}
                        difficulty={activity.difficulty}
                        duration={activity.duration}
                        season={activity.season}
                        countries={activity.countries}
                    />
                })
            }
        </div>
    )
}

export default ActivitiesContainer;