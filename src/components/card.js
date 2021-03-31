import React from 'react';

export default function Card(props) {


    return (
        <div className="card">
            <h3>{props.day}</h3>
            <small>{props.weather.datetime}</small>
            <img src={props.url} alt="weather-image" />
            <small>{props.tempInWords}</small>
            <h6>{props.weather.high_temp} F</h6>
            <h6>{props.weather.low_temp} F</h6>
           </div>
    );
}