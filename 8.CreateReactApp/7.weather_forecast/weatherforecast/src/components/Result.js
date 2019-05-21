import React from 'react';

const Result = props =>{

const {err,city,date,sunrise,sunset,temp,pressure,wind} = props.weather;

let content = null;

if(!err && city){

    const sunriseTime = new Date(sunrise*1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset*1000).toLocaleTimeString();

    content = (
        <div>
            <h1>Wyszukiwanie dla miasta: <em>{city}</em></h1>
            <h2>Dane dla dnia i godziny: {date} </h2>
            <h2>Temperatura: {temp} &#176;C</h2>
            <h2>Ciśnienie: {pressure} hPa</h2>
            <h3>Wschód słońca o: {sunriseTime}</h3>
            <h3>Zachód słońca o: {sunsetTime}</h3>
            <h4>Aktualna siła wiatru {wind}  m/s</h4>

        </div>
    )
}

    return(
    <div className="result">
        {err ? `Nie mamy w bazie ${city}, albo źle wpisałeś` : content}
    </div>
)
}

export default Result;