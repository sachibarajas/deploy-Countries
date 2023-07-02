import { Link } from "react-router-dom";
import s from './NavBar.module.css';
import gitHubIcon from '../../Assets/Images/github.png';
import linkedInIcon from '../../Assets/Images/linkedin.png'

const NavBar = ()=>{
    return(
        <div className={s.navContainer}>
            <Link to='/home'className={s.routeLabel}>Countries</Link>
            <Link to='/activities' className={s.routeLabel}>Activities</Link>
           <div className={s.socialMedia} >
                <a href='https://github.com/sachibarajas'>
                    <img src={gitHubIcon} alt="" className={s.socialMediabtn} />
                </a>
                <a href='https://www.linkedin.com/in/santiagobarajas-fullstack/'>
                    <img src={linkedInIcon} alt="" className={s.socialMediabtn}/>
                </a>
           </div >
        </div>
    )
}

export default NavBar;