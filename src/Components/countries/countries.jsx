import React, { useEffect, useState } from "react"; 
import styles from './countries.module.css';

function CountryCard({ name, flagurl }){
 //console.log(name)
  return (
    <div  className={styles.countryCard}>
      <img src={flagurl} alt={name} width="150px" height="100px"/>
      <h3>{name}</h3>
    </div>
  )
    }


function Countries() {
  // const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")
  const [filteredCountries, setFilteredCountries] = useState([])
  
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then((res) => res.json()).then((data) => setCountries(data))
    .catch((error)=>console.error("Failed to fetch the data", + error));
    
  }, []);


  useState(() => {
    const filteredCountry = countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCountries(filteredCountry);
  }, [search]);




  console.log(filteredCountries)
 
  return (
   
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
      
      <input type="text" placeholder="Search for Countries..." className={styles.img} onChange={(e) => { setSearch(e.target.value) }} />
    
      
    <div style={{display:"flex" ,flexWrap:"wrap",gap:"10px"}}>
      {search === ""? countries.map((item) => (
        //console.log(item.flag)
        <CountryCard name={item.name.common} flagurl={item.flags.png} key={item.name.common} />
      )) :
          filteredCountries.map((item) => (
            <CountryCard name={item.name.common} flagurl={item.flags.png} key={item.name.common} />
          ))
    
    }
      </div>
      
      </div>
  )
}

export default Countries;