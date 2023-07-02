import { GET_COUNTRY, GET_COUNTRIES, GET_ACTIVITIES, FILTER_COUNTRIES, CREATE_ACTIVITY } from "./types";
import axios from 'axios';

const apiDir = 'http://localhost:3001';

export const getCountries=()=>{
    return async function(dispatch){
        const apiData = await axios.get(`${apiDir}/countries`);
        const countries = apiData.data.map(country=>{
            return{
                id: country.id,
                name: country.name,
                flag: country.flag
            }
        });
        dispatch({type: GET_COUNTRIES, payload:countries})
    }
}

export const filterCountries=(dir)=>{
    return async function(dispatch){
        
        console.log(`${apiDir}/countries?${dir}`);
        const apiData = await axios.get(`${apiDir}/countries?${dir}`);
        const countries = apiData.data;
        dispatch({type: FILTER_COUNTRIES, payload:countries})
    }
}

export const getCountry =(id)=>{
    return async function(dispatch){
        const apiData = await axios.get(`${apiDir}/countries/${id}`);
        const countryDetail = apiData.data;
        dispatch({type: GET_COUNTRY, payload: countryDetail[0]})
    }
}

export const getActivities=()=>{
    return async function(dispatch){
        const apiData = await axios.get(`${apiDir}/activities`);
        const activities = apiData.data;
        dispatch({type: GET_ACTIVITIES, payload: activities});
    }
}

export const createActivity = (form) => {
    return async function(dispatch){
        const apiData = await axios.post(`${apiDir}/activities`,form);
        const activities = apiData.data;
        dispatch({type: CREATE_ACTIVITY, payload:activities});
    }
}