import React, { Component } from "react";
import InputFile from "../components/InputFile";
import Document from "../components/Document";

export class FormFiles extends Component {
  constructor() {
    super();
    this.state = {
      documentosExistentes: [],
      documentosFaltantes: [],
    };
  }
  

  getDocumentos = () => {
    fetch("https://getconsultoria.herokuapp.com/api/rh/empresa/documento/2")
    .then((response) => response.json())
    .then((json) => {
        this.documentosRequeridos(json.documentos);
    });
  };

  documentosRequeridos = (documentosActuales) => {
    fetch("https://getconsultoria.herokuapp.com/api/rh/documento_requerido?empresa=true")
    .then((response) => response.json())
    .then((json) => {
        this.quitarExistentes(json.documentos,documentosActuales);
    });
  };

  quitarExistentes = (documentos,documentosActuales) => {
    
    const documentosFaltantes = [];

    let flagEncontrado = false;
    documentos.forEach(documento => {
        flagEncontrado = false;
        documentosActuales.forEach(docActual => {
            if(documento.id_tipo_documento === docActual.id_tipo_documento){
                flagEncontrado = true;
            }
        });

        if(!flagEncontrado){
            documentosFaltantes.push(documento);
            flagEncontrado = false;
        }
    });
    this.setState({documentosFaltantes});
    this.setState({documentosExistentes:documentosActuales});
  };

  componentDidMount() {
    this.getDocumentos();
  }

  deleteDocument = () => {};

  documentosExistentes = () => {
    const { documentosExistentes } = this.state;
    let items = documentosExistentes.map((documento,index) => {
        return (
                <Document documento= {documento} key={index} update={this.getDocumentos} />
            );
        });
       
        
        return (
            <ul className="collection">
                {items}
            </ul>
        );
        
    }

    documentosFaltantes = () =>{
        const {documentosFaltantes} = this.state;
        let items = documentosFaltantes.map((documento,index) => {
            return (
                <InputFile key={index} data={documento} update={this.getDocumentos} />
            );
        });
        return items;
    }
    
  render() {
    return (
        <div>
            <div className="row">
                <div className="col s6 offset-s2">
                    <div className="nav-content blue lighten-2">
                        <ul className="tabs tabs-transparent">
                            <li className="tab"><a className="active" href="#test1">Actuales</a></li>
                            <li className="tab"><a href="#test2">Faltantes</a></li>
                        </ul>
                    </div>
                </div>
                <div id="test1" className="col s12">{this.documentosExistentes()}</div>
                <div id="test2" className="col s12">{this.documentosFaltantes()}</div>
                
            </div>
        </div>
        
    );
  }
}

export default FormFiles;
