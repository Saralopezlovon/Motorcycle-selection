import React from 'react';
import "../stylesheets/filters.scss";

function Filters(props) {

    const handleSearch = (ev) => {
      props.handleSearch({
          value: ev.target.value
        });
    }
    
  
    const onSubmit = ev => {
      ev.preventDefault();
    };
  
    return (
      <form className="input-container" onSubmit={onSubmit}>
        <input className="input" type="text" placeholder="Buscar moto" onChange={handleSearch}/>
        </form>
    );
  }
  
 
  
  export default Filters;
  