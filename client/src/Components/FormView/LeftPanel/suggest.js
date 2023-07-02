const onChange = (e, {newValue}) =>{
    setCountry(newValue)
}

const onSuggestionsFetchRequested = ({value}) => {
    console.log('primer metodo ok');
    setCountList(filterCountries(value))
}

const onSuggestionsClearRequested = () => {
    console.log('segundo metodo ok');
    setCountList([])
}

const getSuggestionValue = (suggestion) =>{
    console.log('tercer metodo ok');
    return `${suggestion.id} - ${suggestion.name}`
}

const renderSuggestion = (suggestion) => (
    <div className={s.Suggestion} onClick={()=>selectCountry(suggestion)}>
        {`${suggestion.id} - ${suggestion.name}`}
    </div>
)

 const selectCountry = (country) => {
        setSelectedCountry((country))
    }

    const inputProps={
        placeholder: 'Select a Country',
        country,
        onChange
    }

    const eventEnter = (e) =>{
        console.log('ejecutando event');
        if (e.key == "Enter") {
            var split = e.target.value.split('-')
            var country = {
                id: split[0].trim(),
                name: split[1].trim(),
            };
            selectCountry(country);
        }
    }

    const filterCountries = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        var filtered = countriesList.filter((country) => {
            var completeText = country.id + ' - ' + country.name;
            if (completeText.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(inputValue)) {
                return country;
            }
        });
        return inputLength===0 ? [] : filtered;
        
    }

    {/* <Autosuggest
            suggestions={countList}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            onSuggestionSelected={eventEnter}
        /> */}