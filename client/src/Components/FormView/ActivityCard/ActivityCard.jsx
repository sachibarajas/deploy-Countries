import s from './ActivityCard.module.css';
import actCard from '../../../Assets/Images/actCard.png';

const ActivityCard = ({name,difficulty,duration,season,countries})=>{

    return(
        <div className={s.ActivityCard}>
            <div className={s.activityInfo}>
                {/* <img src={actCard} alt="activity card" className={s.cardImg} /> */}
                <div className={s.activityText}>
                    <div className={s.infoItem}>
                        <p className={s.Label}>Name:</p>
                        <p className={s.Value}>{name}</p>
                    </div>
                    <div className={s.infoItem}>
                        <p className={s.Label}>Difficulty:</p>
                        <p className={s.Value}>{difficulty}</p>
                    </div>
                    <div className={s.infoItem}>
                        <p className={s.Label}>Duration:</p>
                        <p className={s.Value}>{duration} h</p>
                    </div>
                    <div className={s.infoItem}>
                        <p className={s.Label}>Season:</p>
                        <p className={s.Value}>{season}</p>
                    </div>
                </div>
            </div>
            <div className={s.actCountries}>
                {countries &&
                    countries.map(country=>(
                        <div className={s.Country} key={country.name}>
                            <img src={country.flag} alt="" className={s.countryFlag} />
                            <p className={s.countryName}>{country.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ActivityCard;