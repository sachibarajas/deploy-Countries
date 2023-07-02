import s from './RightPanel.module.css';
import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import ActivitiesContainer from '../ActivitiesContainer/ActivitiesContainer';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const RightPanel = ()=>{
    
    const activities = useSelector(state=>state.Activities);

     // paginado
     const [currentPage, setCurrentPage] = useState(1);
     const [activitiesPerPage, setActivitiesPerPage] = useState(2);
     const indexOfLastActivity = currentPage*activitiesPerPage;
     const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
     const currentActivities = activities.slice(indexOfFirstActivity,indexOfLastActivity);
 
     const paginado = (pageNumber)=>{
         setCurrentPage(pageNumber);
     }
    return(
        <div className={s.RightPanel}>
            <NavBar/>
            <ActivitiesContainer activities={currentActivities}/>
            <Footer
                itemsPerpage={activitiesPerPage}
                allItems={activities.length}
                paginado={paginado}
            />
        </div>
    )
}

export default RightPanel;