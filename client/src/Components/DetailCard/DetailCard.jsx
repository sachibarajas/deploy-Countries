import s from './DetailCard.module.css';
import NavBar from '../NavBar/NavBar';
import detailFooter from '../../Assets/Images/detailFooter.png';
import detailCard from '../../Assets/Images/detailCard.png';
import { useSelector } from 'react-redux';
import backImg from '../../Assets/Images/backBtn.png'
import { Link } from 'react-router-dom';

const DetailCard = ()=>{

    const rawData = useSelector(state=> state.Detail);
    const {
        id,
        name,
        officialName,
        continent,
        subRegion,
        capital,
        population,
        area,
        flag,
        activities
    } = rawData;
    // console.log(`datos recibidos del estado ${data}`);
    return(
       <div className={s.Detail}>
            <NavBar/>
            <a href="http://localhost:3000/home" >
                <img src={backImg} alt="" className={s.backImg}/>
            </a>
            {/* <Link to='/home' className={s.routeLabel}>
                Back
            </Link> */}
            <img src={detailFooter} alt="footer" className={s.Footer} />
            <img src={detailCard} alt="detail card" className={s.detailCard}/>
            <img src={flag} alt="flag" className={s.Flag}/>
            <div className={s.Info}>
                <div className={s.infoItem}>
                    <p className={s.Label}>Id: </p>
                    <p className={s.Data}>{id}</p>
                </div>
                <div className={s.infoItem}>
                    <p className={s.Label}>Name: </p>
                    <p className={s.Data}>{name}</p>
                </div>
                <div className={s.infoItem}>
                    <p className={s.Label}>Capital: </p>
                    <p className={s.Data}>{capital}</p>
                </div>  
                <div className={s.infoItem}>
                    <p className={s.Label}>Continent: </p>
                    <p className={s.Data}>{continent}</p>
                </div>
                <div className={s.infoItem}>
                    <p className={s.Label}>Sub Region: </p>
                    <p className={s.Data}>{subRegion}</p>
                </div>
                <div className={s.infoItem}>
                    <p className={s.Label}>Official Name: </p>
                    <p className={s.Data}>{officialName}</p>
                </div>
                <div className={s.infoItem}>
                    <p className={s.Label}>Area: </p>
                    <p className={s.Data}>{area}</p>
                </div>
                <div className={s.infoItem}>
                    <p className={s.Label}>Population: </p>
                    <p className={s.Data}>{population}</p>
                </div>
                
                <div className={s.activityBox}>
                    <p className={s.Label}>Activities: </p>
                    <div className={s.Activities}>
                        { activities &&
                        activities.map(activity=>(
                            <div className={s.Activity} key={activity.id}>
                                <p className={s.activityName}>{activity.name}</p>
                            </div>
                        ))
                        }
                    </div>
                    
                </div>
            </div>
       </div>
    )
}

export default DetailCard;