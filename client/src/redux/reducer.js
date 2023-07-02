import { GET_COUNTRY, GET_COUNTRIES, GET_ACTIVITIES, FILTER_COUNTRIES, CREATE_ACTIVITY } from "./Actions/types";

const initialState={
    Countries: [],
    Activities: [],
    FilteredCountries:[],
    Detail:''
};

const rootReducer = (state=initialState, action)=>{
    switch(action.type){
        case GET_COUNTRIES:
            return state={
                ...state,
                Countries: action.payload
            };

        case FILTER_COUNTRIES:
            return state={
                ...state,
                FilteredCountries: action.payload
            }

        case GET_ACTIVITIES:
            return state={
                ...state,
                Activities: action.payload
            }

        case GET_COUNTRY:
            return state={
                ...state,
                Detail: action.payload
            }

        case CREATE_ACTIVITY:
            return state={
                ...state,
            }

        default:
            return {...state};
    }
}

export default rootReducer;