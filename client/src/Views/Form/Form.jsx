import LeftPanel from "../../Components/FormView/LeftPanel/LeftPanel";
import RightPanel from "../../Components/FormView/RightPanel/RightPanel";
import s from './Form.module.css';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getActivities, getCountries } from "../../redux/Actions/actions";
const Form = ()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCountries());
        dispatch(getActivities());
    },[dispatch])
    return(
        <div className={s.Form}>
            <LeftPanel/>
            <hr className={s.divLine}/>
            <RightPanel/>
        </div>
    )
}

export default Form;