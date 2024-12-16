import { useState,useEffect} from "react";
import styles from "./countries.module.css";

export default function Countries() {

  const [countries, setCountries] = useState([]);

  function CountryCard({ name, flag }) {
    return (
      <div className={styles.countryCard}>
        <img src={flag} alt={name} width="100px" height="100px" />
        <p>{name}</p>
      </div>
    );
   
  }
  

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then((res) => res.json()).then((data) => setCountries(data))
    .catch((error)=>console.error("Error fetching data:", + error));
    
  }, []);
  


  return (
    <div className={styles.container}>
      {countries.map((country) => (
        <CountryCard name={country.name.common} flag={country.flags.png} key={country.name.common} />
      ))}
      
    </div>
  )
}

    
    