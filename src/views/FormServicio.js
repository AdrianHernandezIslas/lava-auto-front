import React, { Component } from 'react'
import {BASE_URL} from '../data.json';

export class FormServicio extends Component {
    constructor() {
        super();
        this.state = {nombre: '',
                     descripcion:'',
                     costo:0.0};
    }

    handleChangeNombre = (event) => {
        this.setState({nombre : event.target.value});
    };

    handleChangeDescripcion = (event) => {
        this.setState({descripcion : event.target.value});
    };

    handleChangeCosto = (event) => {
        this.setState({costo : event.target.value});
    };

    register = async (event) => {
        event.preventDefault();
        
        const response = await fetch(`${BASE_URL}api/servicio`,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
         });
        console.log(await response.text());
    };

    render() {
        const {nombre,descripcion,costo} = this.state;
        return (
            <div>
                <form onSubmit={this.register}>
                    <div className="row">
                        <div className="input-field col s10 offset-s1">
                            <i className="material-icons prefix">local_car_wash</i>
                            <input id="icon_prefix" type="text" className="validate" name="nombre" value={nombre} onChange={this.handleChangeNombre}  />
                            <label htmlFor="icon_prefix">Nombre</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10 offset-s1">
                            <i className="material-icons prefix">description</i>
                            <textarea id="icon_prefix2" className="materialize-textarea" value={descripcion} onChange={this.handleChangeDescripcion}></textarea>
                            <label htmlFor="icon_prefix2">Descripción</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10 offset-s1">
                            <i className="material-icons prefix">attach_money</i>
                            <input id="icon_prefix3" type="number" className="validate" name="costo"  min="0.0" value={costo} onChange={this.handleChangeCosto} />
                            <label htmlFor="icon_prefix3">Costo</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s4 col s9 offset-s3">
                        <button className="btn waves-effect waves-light center-align" type="submit">registrar
                            <i className="material-icons right">send</i>
                        </button>
                        </div>
                    </div>
                </form>
               
            </div>
        )
    }
}

export default FormServicio
