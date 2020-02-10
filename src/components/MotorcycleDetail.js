import React from 'react';
import "../stylesheets/motorcycledetail.scss";
import { Link } from 'react-router-dom';

const MotorcycleDetail =(props)=> {
    return (
    <div className="detail-container">
        <div className="link-container">
            <Link className="link" to="/">
            Volver
            </Link>
        </div>

        <div className="card">
            <img src={props.motorcycle.imagen} alt={props.motorcycle.nombre}></img>

            <ul className="card-description-container">
                <li>Modelo{props.motorcycle.nombre}</li>
                <li>Marca: {props.motorcycle.marca}</li>
                <li>Año: {props.motorcycle.año}</li>
                <li>Descripción: {props.motorcycle.descripcion}</li>
                <li>Precio: {props.motorcycle.precio} € </li>
            </ul>
        </div>
    </div>

        
    );
};

export default MotorcycleDetail;