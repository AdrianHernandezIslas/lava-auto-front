import React, { Component } from 'react'
import Card from '../components/Card';
import {BASE_URL} from '../data.json';
import NavBarSearch from '../components/NavBarSearch';
//import NavBar from '../components/NavBar';

export class ListCar extends Component {
    constructor() {
        super();
        this.state = { data: [],
                       servicios:[],
                       otros:{valor:"valuescdsc"}};
    }

    cambio = () => {
        this.setState({otros:{valor:"me cambie"}});
        window.alert("me ejecute");
    }

    componentDidMount(){
        this.getModelos();
        this.getServicios();
    }
    
    getModelos = () => {
        fetch(`${BASE_URL}api/modelo`)
        .then(res => res.json())
        .then((json) => {
            json.modelos.forEach(modelo => {
                modelo.flag = true;
            }); 
            this.setState({ data: json.modelos})
        });
    };

    getServicios = () => {
        fetch(`${BASE_URL}api/servicio`)
        .then(res => res.json())
        .then((json) =>{
            this.setState({ servicios: json.servicios })
        });
    };

    searchModelo = (value) => {
        const {data} = this.state;
        data.forEach(modelo => modelo.flag = modelo.nombre.toUpperCase().includes(value.toUpperCase()));
        this.setState({data:data})
    };

    restoreData = () => {
        const {data} = this.state;
        data.forEach(modelo => modelo.flag = true);
        this.setState({data});
    };
    
    showModelos = () => {
        const {data,servicios} = this.state;
        
    
        
        const optinons = data.map((modelo,index) => {
            if(modelo.flag){
                return(    
                    <div className="row" key={index} >
                            <div className="col s10 offset-s1"> 
                                <Card values={modelo} servicio={servicios} fnAccion={this.cambio}  />
                            </div> 
                    </div>
                );
            }else{
                return("");
            }
            
        });

        return optinons;
    };

    render() {
        return (
            <div>
                <NavBarSearch fnSearch={this.searchModelo} fnRestore={this.restoreData} />
                {this.showModelos()}
            </div>
        )
    }
}

export default ListCar
