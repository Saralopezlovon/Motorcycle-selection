import React from 'react';
import "../stylesheets/motorcyclecard.scss";

const MotorcycleCard=(props)=> {
    return (
        <div>{props.motorcycle.nombre}</div>
        

        
    );
    };

export default MotorcycleCard;