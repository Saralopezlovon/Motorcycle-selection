import React from 'react';
import MotorcycleCard from './MotorcycleCard';
import "../stylesheets/motorcyclelist.scss";

const MotorcycleList=(props)=> {
    console.log(props)
    return (
        <div>Listado de motos
        <MotorcycleCard/>
        </div>
    );
    }

export default MotorcycleList;