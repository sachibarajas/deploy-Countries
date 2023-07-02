import s from './RightPanel.module.css';
import NavBar from '../../NavBar/NavBar';
import CountriesContainer from '../CountriesContainer/CountriesContainer';
import Footer from '../../Footer/Footer';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const RightPanel =()=>{
    
    const countries = useSelector(state=>state.FilteredCountries);
    

    // paginado
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const indexOfLastCountry = currentPage*countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = countries.slice(indexOfFirstCountry,indexOfLastCountry);

    const paginado = (pageNumber)=>{
        setCurrentPage(pageNumber);
    }


    return(
        <div className={s.rightPanel}>
            <NavBar/>
            <CountriesContainer countries={currentCountries}/>
            <Footer 
                itemsPerpage={countriesPerPage}
                allItems={countries.length}
                paginado={paginado}
            />
        </div>
    )
}

export default RightPanel;