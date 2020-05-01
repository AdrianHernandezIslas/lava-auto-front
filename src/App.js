import React,{ Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import Home from './views/Home';
import ListCar from './views/ListCar';
import FormMarca from './views/FormMarca';
import FormModelo from './views/FormModelo';
import FormServicio from './views/FormServicio';
import Sidenav from './components/Sidenav'
import FormFiles from './views/FormFiles'


class App extends Component {

  componentDidMount(){
    M.AutoInit();
  }

  hola = () => {
    return "Hello world";
  }; 

  render() {
    return (
    <div>
            <Sidenav />
                <Route exact path="/" render={() => {
                  return <Home />;
                }}>
                  
                </Route>
                <Route exact path="/card" render={() => {
                   return <ListCar />;
                }}>

                </Route>
                <Route exact path="/admin/marca" render={() => {
                   return <FormMarca />;
                }}>

                </Route>
                <Route exact path="/admin/modelo" render={() => {
                   return <FormModelo />;
                }}>

                </Route>
                <Route exact path="/admin/servicio" render={() => {
                   return <FormServicio />;
                }}>

                </Route>
                <Route exact path="/files" render={() => {
                   return <div className ="container" ><FormFiles /></div>;
                }}>

                </Route>
    </div>
    );
  }
}

export default App;
