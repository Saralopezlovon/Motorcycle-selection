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

    const handleFilterTipo = ev => {
      const tipo = ev.target.value;
      props.handleFilterTipo({ value: tipo });
    };

    const handleFilterMarca = ev => {
      const marca = ev.target.value;
      props.handleFilterMarca({ value: marca });
    };

 
  
    return (
      <form className="input-container" onSubmit={onSubmit}>

        <div>

        <span>Tipo de carnet:</span>

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
        
        <div>
          <span>Tipo de moto:</span>
          <select defaultValue="Cualquiera" onChange={handleFilterTipo} id="tipo" name="tipo">
            <option value="Carretera">Carretera</option>
            <option value="Custom">Custom</option>
            <option value="Deportiva">Deportiva</option>
            <option value="Naked">Naked</option>
            <option value="Naked/Deportiva">Naked/Deportiva</option>
            <option value="Scooter">Scooter</option>
            <option value="Trail">Trail</option>
            <option value="Cualquiera">Cualquiera</option>
          </select>
        </div>

        <div>
            <span>Marca:</span>
            <select defaultValue="Cualquiera" onChange={handleFilterMarca} id="marca" name="marca">
            <option value="BMW">BMW</option>
            <option value="Daelim">Daelim</option>
            <option value="Ducati">Ducati</option>
            <option value="Honda">Honda</option>
            <option value="Kawasaki">Kawasaki</option>
            <option value="Keeway">Keeway</option>
            <option value="Triumph">Triumph</option>
            <option value="Yamaha">Yamaha</option>
            <option value="Cualquiera">Cualquiera</option>
            </select>
        </div>


        <div>
        <input className="input" type="text" placeholder="Buscar modelo de moto" onChange={handleSearch}/>
        </div>

        </form>
    );
  }
  
 
  
  export default Filters;
  