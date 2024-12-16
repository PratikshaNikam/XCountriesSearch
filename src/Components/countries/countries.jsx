import { useState,useEffect} from "react";
import styles from "./countries.module.css";
import axios from "axios";

const CountryCard = ({ name, flag }) => {
  return (
    <div className={styles.countryCard}>
      <img src={flag} alt={name} width="100px" height="100px" />
      <p>{name}</p>
    </div>
  );
 
};

 export default function Country() {

  const [countries, setCountries] = useState([]);

  

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
    
      
    
       <div className={styles.subContainer}>

      {countries.map((country) => (
        
          <CountryCard name={country.name.common} flag={country.flags.png} key={country.name.common} />
          
      ))}
      
      </div>
      
      
  )
}

    
    