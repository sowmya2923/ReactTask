import React,{useState} from 'react'

export default function WeatherPractice() {
    const[city,setCity]=useState("city")
    const[weatherData,setWeatherData]=useState([])
    const[apikey,setApikey]="39dbeea21e74e1208ac89978bee11a4a";
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(city.value==""){
          alert("enter city name")
        }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    fetch(url)
    .then((res)=>
        // console.log(res)
        res.json())
    .then((res)=>{
     console.log(res)
     if(res.cod=="404"){
      alert("city not found")
     }
     let{main,sys,name}=res
     weatherData={
      name,country:sys.country,temp:main.temp
      city.value=""
     }
    }) 
     
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="enter your city name" id="city"/>
      <button type="submit">Search</button>
      </form>
     
    </div>
  )
}
    }