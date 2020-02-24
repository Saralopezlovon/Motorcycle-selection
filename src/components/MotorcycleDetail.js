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
            <img className="imagen-detail" src={props.motorcycle.imagen} alt={props.motorcycle.nombre}></img>

            <ul className="card-description-container">
                <li className="details-model">Modelo: {props.motorcycle.nombre}</li>
                <li className="details-brand">Marca: {props.motorcycle.marca}</li>
                <li className="details">Año: {props.motorcycle.año}</li>
                <li className="details">Descripción: {props.motorcycle.descripcion}</li>
                <li className="details">Precio: {props.motorcycle.precio} € </li>
            </ul>
        </div>
    </div>

        
    );
};

export default MotorcycleDetail;