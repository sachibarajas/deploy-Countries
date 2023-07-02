import s from './LeftPanel.module.css';
import Filters from '../Filters/Filters';
import { useEffect } from 'react';
import { filterCountries } from '../../../redux/Actions/actions';
import { useDispatch } from 'react-redux';

const LeftPanel =()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(filterCountries());
    },[])

    return(
        <div className={s.leftPanel}>
            <p className= {s.title} >Countries App</p>
            <Filters/>
        </div>
    )
}

export default LeftPanel;