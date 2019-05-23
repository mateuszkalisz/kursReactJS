import React from 'react';

const Result = (props) =>{

let content = null;

if(!props.error && props.city){

const sunriseTime = new Date(props.sunrise*1000).toLocaleTimeString();
const sunsetTime = new Date(props.sunset*1000).toLocaleTimeString();

content = (
    <div>
        <p>Pogoda dla: {props.city}</p>
        <p>Godzina: {props.date}</p>
        <p>Temperatura: {props.temperature}</p>
        <p>Wschód słońca o: {sunriseTime}</p>
        <p>Zachód słońca o: {sunsetTime}</p>
    </div>
)
}

return(
<div>
    {props.error ? "Nie mamy w bazie" : content}
</div>
)
}

export default Result;