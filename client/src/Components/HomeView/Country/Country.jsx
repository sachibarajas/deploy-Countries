import s from './Country.module.css';
import backGround from '../../../Assets/Images/countryCard2.png';
import plusBtn from '../../../Assets/Images/plusBtn.png'
import { Link } from 'react-router-dom';
import { getCountry } from '../../../redux/Actions/actions';
import { useDispatch } from 'react-redux';




const Country = (props)=>{
    const {flag, name, continent, id} = props;

    return(
        <div className={s.Country}>
            <img src={backGround} alt="" className={s.backGroundImg} />
            <div className={s.Title}>
                <p className={s.Tag}>COUNTRY</p>
                <hr className={s.divLine}/>
            </div >
            <img src={flag} alt="" className={s.Flag}/>
            <div className={s.Info}>
                <p className={s.Name}>{name}</p>
                <p className={s.Continent}>{continent}</p>
                <Link className={s.Link} to={`/countries/${id}`}>
                    <button className={s.moreInfo}>
                        <img src={plusBtn} alt="" className={s.plusBtn}/>
                        <p className={s.infoWd}>info</p>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Country;