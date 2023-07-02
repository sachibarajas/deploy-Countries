import s from './CountriesContainer.module.css';
import Country from '../Country/Country';

const CountriesContainer =({countries})=>{
   
    return(
        <div className={s.CountriesContainer}>
            {countries.length>0 && countries.map(country=>{
                return <Country
                    name={country.name}
                    flag={country.flag}
                    continent={country.continent}
                    key = {country.id}
                    id = {country.id}
                />
            })}
            {countries.length===0 && <h1 className={s.Warning}>No elements to show!</h1>}
        </div>
    )
}

export default CountriesContainer;