import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import './SearchBar.css';

const cities = [  
  
 
  { "name": "Ahmedabad" },
  { "name": "Amritsar" },
  { "name": "Agra" },
  { "name": "Aizawl" },
  { "name": "Aarhus" },
  { "name": "Adelaide" },
  { "name": "Algiers" },
  { "name": "Amsterdam" }

,
  { "name": "Bangalore" },
  { "name": "Bhopal" },
  { "name": "Bhubaneswar" },
  { "name": "Bikaner" },
  { "name": "Bangkok" },
  { "name": "Barcelona" },
  { "name": "Berlin" },
  { "name": "Brisbane" }
,

  { "name": "Chennai" },
  { "name": "Chandigarh" },
  { "name": "Coimbatore" },
  { "name": "Cuttack" },
  { "name": "Cairo" },
  { "name": "Cape Town" },
  { "name": "Chicago" },
  { "name": "Colombo" }
,

  { "name": "Delhi" },
  { "name": "Dharamshala" },
  { "name": "Durgapur" },
  { "name": "Dehradun" },
  { "name": "Dallas" },
  { "name": "Dublin" },
  { "name": "Dubai" },
  { "name": "Durban" }
,

  { "name": "Erode" },
  { "name": "Etawah" },
  { "name": "Eluru" },
  { "name": "Ezhukone" },
  { "name": "Edinburgh" },
  { "name": "Essen" },
  { "name": "Eindhoven" },
  { "name": "Enschede" }
,
 
  { "name": "Faridabad" },
  { "name": "Firozabad" },
  { "name": "Fatehpur" },
  { "name": "Fazilka" },
  { "name": "Florence" },
  { "name": "Frankfurt" },
  { "name": "Fukuoka" },
  { "name": "Fes" }
,

  { "name": "Guwahati" },
  { "name": "Gwalior" },
  { "name": "Gandhinagar" },
  { "name": "Gorakhpur" },
  { "name": "Geneva" },
  { "name": "Glasgow" },
  { "name": "Gdansk" },
  { "name": "Graz" }
,
  { "name": "Hyderabad" },
  { "name": "Hosur" },
  { "name": "Hisar" },
  { "name": "Haldwani" },
  { "name": "Helsinki" },
  { "name": "Hamburg" },
  { "name": "Hanoi" },
  { "name": "Houston" }
,

  { "name": "Indore" },
  { "name": "Imphal" },
  { "name": "Itanagar" },
  { "name": "Ichalkaranji" },
  { "name": "Istanbul" },
  { "name": "Innsbruck" },
  { "name": "Izmir" },
  { "name": "Irkutsk" },

  { "name": "Jaipur" },
  { "name": "Jodhpur" },
  { "name": "Jamshedpur" },
  { "name": "Jabalpur" },
  { "name": "Jakarta" },
  { "name": "Jerusalem" },
  { "name": "Johannesburg" },
  { "name": "Jakarta" }
,
    { "name": "Kolkata" },
  { "name": "Kanpur" },
  { "name": "Kochi" },
  { "name": "Kozhikode" },
  { "name": "Kyoto" },
  { "name": "Kiev" },
  { "name": "Karachi" },
  { "name": "Kuala Lumpur" }
,

  { "name": "Lucknow" },
  { "name": "Ludhiana" },    { "name": "Latur" },
  { "name": "Leh" },
  { "name": "Lima" },
  { "name": "London" },
  { "name": "Lisbon" },
  { "name": "Lagos" }
,
  { "name": "Mumbai" },
  { "name": "Mysore" },
  { "name": "Madurai" },
  { "name": "Mangalore" },
  { "name": "Madrid" },
  { "name": "Manila" },
  { "name": "Montreal" },
  { "name": "Moscow" }
,    { "name": "Nagpur" },
  { "name": "Nashik" },
  { "name": "Noida" },
  { "name": "Nellore" },
  { "name": "Nairobi" },
  { "name": "New York" },
  { "name": "Nuremberg" },
  { "name": "Naples" }
,
  { "name": "Osaka" },
  { "name": "Oslo" },
  { "name": "Okinawa" },
  { "name": "Odense" },
  { "name": "Ooty" },
  { "name": "Osmanabad" },
  { "name": "Orai" },
  { "name": "Ongole" }
,

  { "name": "Pune" },
  { "name": "Patna" },
  { "name": "Puducherry" },
  { "name": "Panaji" },
  { "name": "Paris" },
  { "name": "Prague" },
  { "name": "Phuket" },
  { "name": "Perth" }
,

  { "name": "Quebec" },
  { "name": "Quito" },
  { "name": "Qingdao" },
  { "name": "Quanzhou" },
  { "name": "Quetta" },
  { "name": "Quimper" },
  { "name": "Quirino" },
  { "name": "Quincy" },

  { "name": "Rome" },
  { "name": "Riyadh" },
  { "name": "Reykjavik" },
  { "name": "Rotterdam" },
  { "name": "Ranchi" },
  { "name": "Rajkot" },
  { "name": "Rourkela" },
  { "name": "Raipur" }
,

  { "name": "Seoul" },
  { "name": "Shanghai" },
  { "name": "Sydney" },
  { "name": "Singapore" },
  { "name": "Surat" },
  { "name": "Shimla" },
  { "name": "Srinagar" },
  { "name": "Siliguri" }
,

  { "name": "Tokyo" },
  { "name": "Toronto" },
  { "name": "Tunis" },
  { "name": "Thimphu" },
  { "name": "Thiruvananthapuram" },
  { "name": "Tiruchirappalli" },
  { "name": "Tirupati" },
  { "name": "Tirunelveli" }
,

  { "name": "Udaipur" },
  { "name": "Ujjain" },
  { "name": "Ulhasnagar" },
  { "name": "Unnao" },
  { "name": "Utrecht" },
  { "name": "Ulsan" },
  { "name": "Ufa" },
  { "name": "Ulaanbaatar" }
,

  { "name": "Valencia" },
  { "name": "Vienna" },
  { "name": "Vancouver" },
  { "name": "Venice" },
  { "name": "Varanasi" },
  { "name": "Vijayawada" },
  { "name": "Visakhapatnam" },
  { "name": "Vadodara" },

  { "name": "Warsaw" },
  { "name": "Wellington" },
  { "name": "Washington" },
  { "name": "Wroclaw" },
  { "name": "Warangal" },
  { "name": "Wardha" },
  { "name": "West Bengal" },
  { "name": "Wayanad" }
,

  { "name": "Xian" },
  { "name": "Xiamen" },
  { "name": "Xianyang" },
  { "name": "Xiangyang" },
  { "name": "Xichang" },
  { "name": "Xinyu" },
  { "name": "Xuchang" },
  { "name": "Xuzhou" },

  { "name": "Yokohama" },
  { "name": "Yangon" },
  { "name": "Yerevan" },
  { "name": "Yekaterinburg" },
  { "name": "Yamunanagar" },
  { "name": "Yavatmal" },
  { "name": "Yamunotri" },
  { "name": "Yellapur" } ,

  { "name": "Zurich" },
  { "name": "Zagreb" },
  { "name": "Zanzibar" },
  { "name": "Zaragoza" },
  { "name": "Zunheboto" },
  { "name": "Zunzal" },
  { "name": "Zira" },
  { "name": "Zunyi" }
];


function SearchBar({ setCity }) {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState('');

  const onChange = (event, { newValue }) => {
    setValue(newValue);
    setCity(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? [] : cities.filter(city =>
      city.name.toLowerCase().includes(inputValue)
    );
  };

  const getSuggestionValue = (suggestion) => suggestion.name;

  const renderSuggestion = (suggestion) => (
    <div>
      {suggestion.name}
    </div>
  );

  const inputProps = {
    placeholder: 'Enter your city',
    value,
    onChange: onChange
  };

  return (
    <div className="search-bar-container">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    </div>
  );
}

export default SearchBar;
