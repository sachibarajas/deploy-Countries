import { useDispatch, useSelector } from 'react-redux';
import s from './Filters.module.css';
import { useState } from 'react';
import { filterCountries } from '../../../redux/Actions/actions';


const Filters =()=>{

    const dispatch = useDispatch()
    const activities = useSelector(state => state.Activities)
    const [filters, setFilters] = useState({
        name:'',
        continents:[],
        activity:'',
        orderBy:'',
        order:'',

    })

    const handleChange = (e) => {
        let dir = ''
        const property = e.target.name;
        const value = e.target.value;
        console.log(`cambia la propiedad: ${property} con el valor: ${value}`);
        dir = validate({...filters, [property]:value});
        setFilters({...filters, [property]:value});
        
        dispatch(filterCountries(dir));

    }

    const handleContinents = (e) => {
        let dir = '';
        const property = e.target.name;
        const value = e.target.value;
        const id = e.target.id;
        const element = document.getElementById(id);
        console.log(`valor: ${value}, checkeado: ${element.checked}`);
        if (element.checked) {
            dir = validate({...filters, [property]: filters.continents.concat([value])});
            setFilters({...filters, [property]: filters.continents.concat([value])})
        }else{
            dir = validate({...filters, [property]: filters.continents.filter(continent => continent != value)});
            setFilters({...filters, [property]: filters.continents.filter(continent => continent != value)} )
        } 
        
        dispatch(filterCountries(dir));
    }

    const validate = (filters) => {
        let dir = '';
        if (filters.order) {
            dir=dir+`order=${filters.order}&`
        }
        if (filters.orderBy) {
            dir=dir+`orderBy=${filters.orderBy}&`
        }
        if (filters.name) {
            dir=dir+`name=${filters.name}&`
        }
        if (filters.activity) {
            dir=dir+`activity=${filters.activity}&`
        }
        if (filters.continents.length > 0){
            let continentString = filters.continents.toString();
            dir = dir+`continents=${continentString}&`;
        }
        return dir;
    }

    return(
        <div className={s.Filters}>
        <form>
                <p className= {s.label} >Search Country by Name</p>
                <input 
                    type="text" 
                    className={s.Input}
                    value={filters.name}
                    name='name'
                    placeholder="Country's name"
                    onChange={handleChange}/>
                <hr className={s.divLine}/>
                
                <p className= {s.label}>Filter by continent</p>
                <div className={s.Continents} >
                    <label className={s.label} >
                        <input 
                            type="checkbox" 
                            id='Africa' 
                            value='Africa' 
                            name='continents' 
                            onChange={handleContinents}/>
                        Africa
                    </label>
                    <label className={s.label}>
                        <input 
                            type="checkbox" 
                            id='Americas' 
                            value='Americas'
                            name='continents'
                            onChange={handleContinents} 
                        />
                        Americas
                    </label>
                    <label className={s.label}>
                        <input 
                            type="checkbox" 
                            id='Asia' 
                            value='Asia'
                            name='continents'
                            onChange={handleContinents}
                        />
                        Asia
                    </label>
                    <label className={s.label}>
                        <input 
                            type="checkbox"
                            id='Europe' 
                            value='Europe'
                            name='continents'
                            onChange={handleContinents}
                        />
                        Europe
                    </label>
                    <label className={s.label}>
                        <input 
                            type="checkbox" 
                            id='Oceania' 
                            value='Oceania'
                            name='continents'
                            onChange={handleContinents}
                        />
                        Oceania
                    </label>
                </div>
    
                <p className={s.label}>Filter by Activity</p>
                <select 
                    name="activity" 
                    id="activities" 
                    className={s.Select}
                    value={filters.activity}
                    onChange={handleChange}
                    >
                    <option value="" selected className={s.Placeholder}>Activity</option>
                    {
                        activities.map(activity =>(
                            <option value={activity.name} >{activity.name}</option>
                        ))
                    }

                </select>
                <hr className={s.divLine}/>
                
                {/* order */}
                <div className={s.Order}>
                <p className={s.Label}>Sort Countries</p>
                <select 
                    name="orderBy" 
                    id="orderBy" 
                    className={s.Select}
                    value={filters.orderBy}
                    onChange={handleChange}
                >
                    <option value="" disabled selected hidden className={s.Label}>By</option>
                    <option value="name" className={s.Label}>Name</option>
                    <option value="population" className={s.Label}>Population</option>
                </select>
    
                <select 
                    name="order" 
                    id="order" 
                    className={s.Select}
                    value={filters.order}
                    onChange={handleChange}>
                    <option value="" disabled selected hidden className={s.Label}>Order</option>
                    <option value="DESC" className={s.Label}>Descending</option>
                    <option value="ASC" className={s.Label}>Ascending</option>
                </select>
            </div>
        </form> 
            </div>
           
           
    )
}

export default Filters;