import React,{useEffect,useState} from "react"
import Card from './card';

const WeatherCards=() => {

    const key="2a51642963d6428e9f2c80480cb0cdcd"
    const cityname="New York"

    const [weather,setweather]= useState("")
    const [search,setsearch]=useState("")
    const [query,setquery]=useState("Raleigh")

    useEffect(() => {
        getvalues()
     }, [query])

    const getvalues=async ()=>{
        const response=await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${query},NC&key=${key}`)
        const data=await response.json()
        console.log(data.data)
        setweather(data.data)
        setsearch("")
    }
    const updateSearch= e =>{
        setsearch(e.target.value)
    }
    
    const updateValue= e =>{
        e.preventDefault()
        setquery(search)
    }
  
        return (
            <div className="mainapp">
            <form onSubmit={updateValue} className="search-form">
            <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
            <button className="search-button" type="submit">search</button>
        </form>
            <div className="wbox" >
                <Card  day="MONDAY" weather={weather[1]} tempInWords="Clear Sky" url="http://openweathermap.org/img/wn/01d@2x.png" />
                <Card  day="TUESDAY" weather={weather[2]} tempInWords= "Broken Clouds" url= "http://openweathermap.org/img/wn/03d@2x.png"/>
                <Card  day="WEDNESDAY" weather={weather[3]} tempInWords="Rain" url="http://openweathermap.org/img/wn/10d@2x.png"/>
                <Card  day="THURSDAY" weather={weather[4]}  tempInWords= "Clear Sky" url= "http://openweathermap.org/img/wn/01d@2x.png"/>
                <Card  day="FRIDAY" weather={weather[5]} tempInWords="Thunderstrom" url="http://openweathermap.org/img/wn/11d@2x.png"/>
                </div>
                </div>
        )

}

export default WeatherCards;