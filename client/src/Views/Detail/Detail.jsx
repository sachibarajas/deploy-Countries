import { useDispatch } from "react-redux"
import DetailCard from "../../Components/DetailCard/DetailCard";
import { getCountry } from "../../redux/Actions/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const Detail = () =>{
    const {id} = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCountry(id));
    },[dispatch])
    return(
        <DetailCard/>
    )
}

export default Detail;