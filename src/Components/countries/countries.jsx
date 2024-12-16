import { useState,useEffect} from "react";
import styles from "./countries.module.css";
import axios from "axios";

export default function CountryCard() {

  const [countries, setCountries] = useState([]);

  const Country=({ name, flag }) =>{
    return (
      <div className={styles.countryCard}>
        <img src={flag} alt={name} width="100px" height="100px" />
        <p>{name}</p>
      </div>
    );
   
  }

  const getCountries = () => {
   axios.get("https://restcountries.com/v3.1/all").then(
    (response) => {
      setCountries(response.data);
    },
    (error) => {
      console.log(error);
    }
  );

  }
  

  useEffect(() => {
    getCountries();
  }, []);
  


  return (
    <div>
       <input type="text" placeholder="Search for a country" />
    
       <div className={styles.subContainer}>

      {countries.map((country) => (
        
          <Country name={country.name.common} flag={country.flags.png} key={country.name.common} />
          
      ))}
      
      </div>
      
      </div>
  )
}

    
    