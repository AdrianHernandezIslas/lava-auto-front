import React, { Component } from 'react'
import {BASE_URL} from '../data.json';


export class FormModelo extends Component {
    constructor() {
        super();
        this.state = { data: [],
                       valueSelect: '0',
                       vehiculos:[],
                       valueSelectV:'0'
                    };
    }

    componentDidMount(){
        this.getMarcas();
        this.getVehiculos();
    }
    
    getMarcas = () => {
        fetch(`${BASE_URL}api/marca`)
        .then(res => res.json())
        .then(json => this.setState({ data: json.marcas }));
    };

    getVehiculos = () => {
        fetch(`${BASE_URL}api/vehiculo`)
        .then(res => res.json())
        .then(json => this.setState({ vehiculos: json.vehiculos }));
    };

    showMarcas = () => {
    
        const optinons = this.state.data.map((marca,index) => {
            return(
                <option value={marca.id_marca}  key={marca.id_marca}>{marca.nombre}</option>
            );
        });

        return optinons;
    };
     
    
    

    showVehiculos = () => {
        const optinons = this.state.vehiculos.map((vehiculo,index) => {
            return(
                  <option value={vehiculo.id_vehiculo} key={index}>{vehiculo.tipo} - {vehiculo.descripcion}</option>
            );
        });

        return optinons;
    };

    handleChange = (event) => {
        this.setState({valueSelect: event.target.value});
    };

    handleChangeVehiculo = (event) => {
        this.setState({valueSelectV: event.target.value});
    };

    register = async (event) => {
        event.preventDefault();
        const response = await fetch(`${BASE_URL}api/modelo`,{
            method: 'POST',
            body: new FormData(event.target)
         });
        console.log(await response.text());
    };

    
    render() {
        return (
            <div> 
               <div className="row">
                    <div className="col s10 offset-s2">
                        <h5>Registro Modelo</h5>
                    </div>
               </div>
               <form onSubmit={this.register}> 
                    <div className="row">
                        <div className="input-field col s10 offset-s1">
                            <i className="material-icons prefix">directions_car</i>
                            <input id="icon_prefix" type="text" className="validate" name="nombre" />
                            <label htmlFor="icon_prefix">Nombre</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10 m2 offset-s1">
                            <select name="marca" className="browser-default" value={this.state.valueSelect} onChange={this.handleChange}>
                                <option value="0" disabled>Selecciona una marca</option>
                                {this.showMarcas()}
                            </select>
                        </div>  
                    </div>
                    <div className="row">
                        <div className="input-field col s10 m2 offset-s1">
                            <select name="vehiculo" className="browser-default" value={this.state.valueSelectV} onChange={this.handleChangeVehiculo}>
                                <option value="0" disabled>Selecciona tipo vehiculo</option>
                                {this.showVehiculos()}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s10 offset-s1">
                            <div className="file-field input-field">
                                <div className="btn">
                                    <span>Imagen</span>
                                    <input type="file" name="file" />
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text" placeholder="Seleccione ..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s4 offset-s4">
                            <button className="btn" type="submit">Registrar</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormModelo
