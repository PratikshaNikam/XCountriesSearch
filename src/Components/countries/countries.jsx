import React,{useEffect,useState} from "react"; 

function CountryCard({ name, flagurl }){
 console.log(name)
  return (
    <div style={{display:"flex", flexDirection:"column", width:"150px",height:"150px", border:"1px solid gray", borderRadius:"10px", justifyContent:"center",alignItems:"center",padding:"10px"}} >
      <img src={flagurl} alt={name} width="100px" height="100px"/>
      <h3>{name}</h3>
    </div>
  )
    }


function Countries() {
  // const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [countries,setCountries]=useState([])
  
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then((res) => res.json()).then((data) => setCountries(data))
    .catch((error)=>console.error("Error fetching data:", + error));
    
  }, []);

 // console.log(countries)
  return (
    <div style={{display:"flex" ,flexWrap:"wrap",gap:"10px"}}>
      {countries.map((item) => (
        //console.log(item.flag)
        <CountryCard name={item.name.common} flagurl={item.flags.png} key={item.name.common} />
      ))}
    </div>
  )
}

export default Countries;