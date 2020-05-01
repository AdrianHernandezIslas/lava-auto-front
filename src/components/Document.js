import React, { Component } from 'react'

export class Document extends Component {

    delete = (event) => {
        event.preventDefault();
        const {id_tipo_documento} = this.props.documento;
    
        fetch(`https://getconsultoria.herokuapp.com/api/rh/empresa/documento/2/${id_tipo_documento}`, {
          method: 'DELETE',
          headers:new Headers()
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => this.props.update());
        console.log('me ejecute');
    };
    

    render() {
        const {documento} = this.props;
        return (
            <div>
                <li className="collection-item avatar">
                    <i className="material-icons circle green">insert_chart</i>
                    <span className="title">Documento {documento.id_tipo_documento}</span>
                    <p>Fecha Modificacion <br />
                        {documento.fecha_modificacion}
                    </p>
                    <a href="#!" className="secondary-content" onClick={this.delete} ><i className="material-icons">clear</i></a>
                </li>
            </div>
        )
    }
}

export default Document
