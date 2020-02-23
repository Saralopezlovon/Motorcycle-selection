import React from "react";
import { Route, Switch } from 'react-router-dom';
import apiMotorcycles from '../api/motorcycles';
import "../stylesheets/app.scss";
import Header from "./Header";
import Filters from "./Filters";
import MotorcycleList from "./MotorcycleList";
import MotorcycleDetail from "./MotorcycleDetail"

class App extends React.Component {

  constructor(){
    super();
    this.state ={
      search:'',
      motorcycles:[],
      carnetSelected: "",
      tipo:"",
      marca:"",
    };
    this.renderMotorcycleDetail = this.renderMotorcycleDetail.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleFilterTipo = this.handleFilterTipo.bind(this);
    this.handleFilterMarca = this.handleFilterMarca.bind(this);
  }

  componentDidMount(){
    apiMotorcycles().then(motorcycles =>this.setState({motorcycles}));
  }

  handleSearch(data){
    this.setState({
      search: data.value
    })
  }

  handleFilter(carnetSelected) {
    this.setState({ carnetSelected: carnetSelected.value
     });
  }

  handleFilterTipo(tipo){
    this.setState({ tipo: tipo.value
    });
  }

  handleFilterMarca(marca){
    this.setState({ marca: marca.value
    });
  }


  filterMotorcyclesBySearch(){
    return this.state.motorcycles

    .filter(motorcycle => {
      return motorcycle.nombre.toLowerCase().includes(this.state.search.toLowerCase())
    })
    .filter(motorcycle => {
      return motorcycle.carnet.toLowerCase().includes(this.state.carnetSelected.toLowerCase())     
    })

    .filter(motorcycle => {
      return motorcycle.tipo.toLowerCase().includes(this.state.tipo.toLowerCase())     
    })

    .filter(motorcycle => {
      return motorcycle.marca.toLowerCase().includes(this.state.marca.toLowerCase())     
    });

  }


  renderMotorcycleDetail(props){
    const routeId = parseInt(props.match.params.id);
    const motorcycle = this.state.motorcycles.find (motorcycle => motorcycle.id === routeId);
    if (motorcycle === undefined){
      return <p>Moto no encontrada</p>
    }
      else{
      return <MotorcycleDetail motorcycle={motorcycle}/>
    }
  }

  render() {
    return (
    <div className="App">
      <Header/>
      <div className="body-page">
        <Filters 
        handleSearch={this.handleSearch} 
        handleFilter={this.handleFilter} carnetSelected={this.state.carnetSelected} 
        handleFilterTipo={this.handleFilterTipo} tipo={this.state.tipo} 
        handleFilterMarca={this.handleFilterMarca} marca={this.state.marca}/>

        <Switch>
          <Route exact path='/' >
            <MotorcycleList motorcycles={this.filterMotorcyclesBySearch()}/>
          </Route>
          <Route path='/motorcycle/:id' render={this.renderMotorcycleDetail}/>
        </Switch>
      </div>

    </div>
    );
  }
}

export default App;
