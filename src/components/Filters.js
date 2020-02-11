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

    const handleFilter = ev => {
      const carnetSelected = ev.target.value;
      props.handleFilter({ value: carnetSelected });
    };
  
    return (
      <form className="input-container" onSubmit={onSubmit}>
        <input className="input" type="text" placeholder="Buscar modelo de moto" onChange={handleSearch}/>

        <div>



          <label htmlFor="A">
            A
            <input name="carnet" value="A" id="A" type="radio" onChange={handleFilter} checked={props.carnetSelected === "A"} />
          </label>



          <label htmlFor="A/A2">
            A/A2
            <input name="carnet" value="A/A2" id="A/A2" type="radio" onChange={handleFilter} checked={props.carnetSelected === "A/A2"} />
          </label>


          <label htmlFor="A1/B">
            A1/B
            <input name="carnet" value="A1/B" id="A1/B" type="radio" onChange={handleFilter} checked={props.carnetSelected === "A1/B"} />
          </label>


          <label htmlFor="A2">
            A2
            <input name="carnet" value="A2" id="A2" type="radio" onChange={handleFilter} checked={props.carnetSelected === "A2"} />
          </label>


          <label htmlFor="Cualquiera">
            Cualquiera
            <input name="carnet" value="" id="Cualquiera" type="radio" onChange={handleFilter} checked={props.carnetSelected === ""} />
          </label>



        </div>

        </form>
    );
  }
  
 
  
  export default Filters;
  