import React from 'react';
import "../stylesheets/motorcyclecard.scss";
import { Link } from 'react-router-dom';

const MotorcycleCard=(props)=> {
    return (
        <li> 
          <Link to={`/motorcycle/${props.motorcycle.id}`}>     
            <img src={props.motorcycle.imagen} alt={props.motorcycle.nombre}></img>
            <ul>           
              <li>{props.motorcycle.marca}</li>
              <li>{props.motorcycle.nombre}</li>
              <li>{props.motorcycle.año}</li>
            </ul>
          </Link>  

      </li>
                
    );
    };

export default MotorcycleCard;