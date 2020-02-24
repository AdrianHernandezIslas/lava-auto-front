import React, { Component } from 'react';
import NavBar from '../components/NavBar'


export class Form extends Component {

    
    register = async (event) =>{
        event.preventDefault();
        
        const response = await fetch('http://localhost:4000/api/marca',{
            method: 'POST',
            body: new FormData(event.target)
         });
         //M.toast({html: 'I am a toast!', classes: 'rounded'});
        console.log(await response.text());
    };

    render() {
        return (
        <div >
            <NavBar name="Marca" />
            <div className="row">
            </div>
            <form onSubmit={this.register} >
                <div className="row">
                    <div className="input-field col s10 offset-s1">
                        <i className="material-icons prefix">person</i>
                        <input type="text" id="nombre" name="nombre" className="validate"></input>
                        <label htmlFor="nombre" >Nombre</label>
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
                                <input className="file-path validate" type="text" placeholder="Sin selección" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s4 offset-s4">
                        <button className="btn light-blue" type="submit">Registrar</button>
                    </div>
                </div>
            </form>
        </div>
                
            
        )
    }
}

export default Form
