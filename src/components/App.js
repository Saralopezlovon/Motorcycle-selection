import React from "react";
import { Route, Switch } from 'react-router-dom';
import apiMotorcycles from '../api/motorcycles';
import "../stylesheets/app.scss";
import Header from "./Header";
/*import Filters from "./Filters";*/
import MotorcycleList from "./MotorcycleList";
import MotorcycleDetail from "./MotorcycleDetail"

class App extends React.Component {

  constructor(){
    super();
    this.state ={
      motorcycles:[]
    };
    this.renderMotorcycleDetail = this.renderMotorcycleDetail.bind(this);
  }

  componentDidMount(){
    apiMotorcycles().then(motorcycles =>this.setState({motorcycles}));
  }

  renderMotorcycleDetail(props){
    const routeId = props.match.params.id;
    const motorcycle = this.state.motorcycles.find (item => item.id === routeId);
    return <MotorcycleDetail motorcycle={motorcycle}/>
  }

  render() {
    return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' >
          <MotorcycleList motorcycles={this.state.motorcycles}/>
        </Route>
        <Route path='/motorcycle/:id' render={this.renderMotorcycleDetail}/>
      </Switch>

    </div>
    );
  }
}

export default App;
