import React, { Component } from 'react'
import {Image} from 'cloudinary-react'
import {BASE_URL} from '../data.json';


export class Card extends Component {
    constructor() {
        super();
        this.state = { data: [],
                       valueSelect: '0'};
    }

    componentDidMount(){
    }

    agregarServicio = async () => {
        const {valueSelect} = this.state;
        const{id_modelo} = this.props.values;
        fetch(`${BASE_URL}api/servicio-vehiculo`,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({servicio:valueSelect,id_modelo})
         }).then(res => res.json())
         .then((json) =>{
            
            window.M.toast({html:'Registro Exitoso<br/>'+json.fecha[0].fecha , classes: 'rounded'});
         });
    };

    handleChange = (event) => {
        this.setState({valueSelect: event.target.value});
    };

    showServicios= () => {
        const {servicio} = this.props;
        const optinons = servicio.map((servicio,index) => {
            return(
                <option value={servicio.id_servicio}  key={servicio.id_servicio}>{servicio.nombre}</option>
            );
        });

        return optinons;
    };

    render() {
        const {imagen,nombre} = this.props.values ;
        return (
           <div>
                <div className="card sticky-action center-align">
                    <div className="card-image waves-effect waves-light">
                        <Image cloudName="lavaautos" publicId={imagen} responsive width="auto" />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{nombre}<i className="material-icons right">more_vert</i></span>
                        
                    </div>
                    <div className="card-action">
                        <div className="input-field s3">
                            <select name="servicio" className="browser-default" value={this.state.valueSelect} onChange={this.handleChange}>
                                <option value="0" disabled>Selecciona un servicio</option>
                                {this.showServicios()}
                            </select>
                        </div>
                        <button className=" waves-effect waves-light btn teal lighten-2" onClick={this.agregarServicio} >registrar</button>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        <button className="btn teal lighten-2" onClick={this.props.fnAccion} >OTRO BTN</button>
                    </div>
                    
                </div>
           </div>
            
        );
    }
}

export default Card
