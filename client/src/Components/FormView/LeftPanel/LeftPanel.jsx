import s from './LeftPanel.module.css';
import { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getActivities, getCountries } from '../../../redux/Actions/actions';
import Form from '../Form/Form';

const LeftPanel = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getActivities());
        dispatch(getCountries());
    },[])

    return(
        <div className={s.LeftPanel}>
            <Form/>
        </div>
    )
}

export default LeftPanel;