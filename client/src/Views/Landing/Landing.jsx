import s from './Landing.module.css';
// import { Link } from 'react-router-dom';
import btnImg from '../../Assets/Images/startBtn.png';
import gitHubIcon from '../../Assets/Images/github.png';
import linkedInIcon from '../../Assets/Images/linkedin.png'

const Landing = () => {

    return (
        <div className={s.landingContainer}>

            <p className={s.presentation}> Welcome travelers to the App that helps you find the best places and memorable activities to live your next story to tell, enjoy the experience and say, !I'm going on an adventure!</p>
            
            <a href='http://localhost:3000/home'>
                <img src={btnImg} alt="halla" className={s.startBtnImg}/>
            </a>

            <div className={s.socialMedia}>
                <a href='https://github.com/sachibarajas'>
                    <img src={gitHubIcon} alt="halla" className={s.socialMediabtn}/>
                </a>
                <a href='https://www.linkedin.com/in/santiagobarajas-fullstack/'>
                    <img src={linkedInIcon} alt="halla" className={s.socialMediabtn}/>
                </a>
            </div>
            
        

        </div>
    )
}

export default Landing;