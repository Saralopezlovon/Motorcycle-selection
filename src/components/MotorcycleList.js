import React from 'react';
import MotorcycleCard from './MotorcycleCard';
import "../stylesheets/motorcyclelist.scss";

const MotorcycleList=(props)=> {
    return (
        <div>
            {props.motorcycles.map(motorcycle =>{
                return(
                    <MotorcycleCard 
                    key={motorcycle.id}
                    motorcycle={motorcycle}
                    />
                )
            })}
               
        </div>
    );
};

export default MotorcycleList;