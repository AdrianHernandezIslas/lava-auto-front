import React, { Component } from "react";

export class InputFile extends Component {

  constructor(){
    super();
    this.fie = React.createRef();
    this.state = {
        id_documento:0
    }
  }

  send = () => {
    const {id_tipo_documento} = this.props.data;
    let form = new FormData();
    form.append('documento', this.fie.current.files[0], 'documento.pdf');
    form.append('id_tipo_documento',id_tipo_documento);
    form.append('id_empresa',2);

    fetch('http://localhost:4000/api/rh/empresa/documento/', {
      method: 'POST', // or 'PUT'
      body: form, // data can be `string` or {object}!
      headers:new Headers()
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => this.props.update());
  };

  render() {
    const {id_tipo_documento} = this.props.data;
    return (
      <div className="row">
        <div className="col s8">
          <div className="file-field input-field">
            <div className="btn">
              <span>File</span>
              <input type="file"  ref={this.fie} />
            </div>
            <div className="file-path-wrapper">
              <input
                className="file-path validate"
                type="text"
                placeholder={`documento ${id_tipo_documento}`}
              />
            </div>
          </div>
        </div>
        <div className="col s4 file-field input-field">
          <button className="btn waves-effect waves-light" onClick={this.send}>
            <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
    );
  }
}

export default InputFile;
