import s from './Form.module.css';
import titleImg from '../../../Assets/Images/createActivity.png';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createActivity, getActivities, getCountries } from '../../../redux/Actions/actions';

const Form = () => {

    const dispatch = useDispatch();
    const countriesList = useSelector(state=>state.Countries);
    if (countriesList.length===0) {
        dispatch(getCountries())
    }
    const [country, setCountry] = useState('')
    const [countriesNames, setCountriesNames] = useState([])
    const [ form, setForm ] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries:[]
    })

    const [errors,setErrors] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries:''
    })

    const validate = (state) =>{
        if (state.name === '') {
            setErrors({...errors, name: "The name can't be empty"})
        } else {
            setErrors({...errors,name:""})
        }
        if(state.countries.length = 0){
            setErrors({...errors, countries:'You need to add at least one country'})
        } else {
            setErrors({...errors,countries:""})
        }
        if (state.difficulty ==='') {
            setErrors({...errors, difficulty:'You must select a difficulty'})
        } else {
            setErrors({...errors, difficulty:""})
        }
        if (state.duration ==='') {
            setErrors({...errors, duration:'You must select a duration'})
        } else {
            setErrors({...errors, duration:""})
        }
        if (state.season ==='') {
            setErrors({...errors, season:'You must select a season'})
        } else {
            setErrors({...errors,season:""})
        }

    }

    const handleChange = (e) => {
        const property = e.target.name;
        const value = e.target.value;
        if (property==='country') {
            setCountry(value)
        }else{
            validate({...form, [property]:value})
            setForm({...form, [property]:value})}
    }

    const handleCountries = (e)=> {
        e.preventDefault();
        var found = false
        for (let i = 0; i < countriesList.length; i++) {
            const compValue= country.toLowerCase()
            if (compValue === countriesList[i].name.toLowerCase()) {
                found = true
                var countryId = countriesList[i].id
                var idsArray = form.countries
                if (idsArray.indexOf(countryId) == -1) {
                    setForm({...form, countries: [...form.countries, countriesList[i].id]});
                    setCountriesNames([...countriesNames, {name:countriesList[i].name, flag:countriesList[i].flag}])
                    setCountry("");
                    break;
                }else{
                    alert('country already in list')
                    setCountry('')
                    break;
                }
                
            }
        } 
        if(!found) {
            alert(`${country} does not exist`)
            setCountry(''); 
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('submitting');
        if (form.name !=='' && form.countries.length != 0 && form.difficulty!=='' && form.duration!=='' && form.season!=='') {
            console.log(`form a enviar: ${form}`);
            // const response = axios.post('http://localhost:3001/activities',form)
            // .then(res=>alert(res))
            dispatch(createActivity(form));
        } else{
            alert('You must select or add all fields');
            setCountriesNames([]);
        }
        setForm({
            name: '',
            difficulty: '',
            duration: '',
            season: '',
            countries:[]
        });
        setCountriesNames([]);
        dispatch(getActivities());
    }
    return(
        <div className={s.FormCont}>
            <img src={titleImg} alt="" className={s.titleImg}/>
        
                   <div className={s.Form}>
                        <form onSubmit={handleSubmit}>
                            
                            <div className={s.inputBox}>
                                <div className={s.Input}>
                                    <label htmlFor="" className={s.Label}>Name: </label>
                                    <input 
                                        type="text"  
                                        className={s.txtInput} 
                                        value={form.name}
                                        onChange={handleChange}
                                        name='name' 
                                        placeholder="Activity's name..."   
                                    />
                                </div>
                                {errors.name && <div className={s.errorMsg}>{errors.name}</div>}
                            </div>
                            
                            
                            <div className={s.inputBox}>
                                <div className={s.Input}>
                                    <label htmlFor="" className={s.Label}>Difficulty:     </label>
                                    <select name="difficulty" id="difficulty" className={s.txtInput} value={form.difficulty} onChange={handleChange}>
                                        <option value="" disabled selected hidden className={s.Label}>Choose one</option>
                                        <option value="1" className={s.Label}>1</option>
                                        <option value="2" className={s.Label}>2</option>
                                        <option value="3" className={s.Label}>3</option>
                                        <option value="4" className={s.Label}>4</option>
                                        <option value="5" className={s.Label}>5</option>
                                    </select>
                                </div>
                                {errors.difficulty && <div className={s.errorMsg}>{errors.difficulty}</div>}
                            </div>
                            
                            <div className={s.inputBox}>
                                <div className={s.Input}>
                                    <label htmlFor="" className={s.Label} >Duration:     </label>
                                    <input 
                                        type="number" 
                                        min='1'
                                        max='12'
                                        className={s.txtInput} 
                                        value={form.duration} 
                                        onChange={handleChange}
                                        name='duration'
                                        placeholder='Hours...'
                                    />
                                </div>
                                {errors.duration && <div className={s.errorMsg}>{errors.duration}</div>}
                            </div>
        
                            <div className={s.inputBox}>
                                <div className={s.Input}>
                                    <label htmlFor="" className={s.Label}>Season:     </label>
                                    <select name="season" id="season" className={s.txtInput} value={form.season} onChange={handleChange}>
                                        <option value="" disabled selected hidden className={s.Label}>Choose one</option>
                                        <option value="Summer" className={s.Label}>Summer</option>
                                        <option value="Spring" className={s.Label}>Spring</option>
                                        <option value="Fall" className={s.Label}>Fall</option>
                                        <option value="Winter" className={s.Label}>Winter</option>
                                    </select>
                                </div>
                                {errors.season && <div className={s.errorMsg}>{errors.season}</div>}
                            </div>
        
                            <div className={s.InputCountries}>
                                <div className={s.Input}>
                                    <label htmlFor="" className={s.Label}>Countries:  </label>
                                    <input type="text" className={s.txtInput} value={country} name='country' onChange={handleChange}/>
                                </div>
                                <button className={s.addBtn} onClick={handleCountries} name='addDtn' value={country} >Add</button>
                            </div>
                            <div className={s.countriesPanel}>
                               {
                                countriesNames.map(country => (
                                    <div className={s.Country} key={country.name}>
                                        <img src={country.flag} alt="" className={s.countryFlag} />
                                        <p className={s.countryName}>{country.name}</p>
                                    </div>
                                ))
                               }
                            </div>
                            <button type='submit' className={s.createBtn}>
                            </button>
                        </form>
                   </div>
        </div>
    )
}

export default Form;
