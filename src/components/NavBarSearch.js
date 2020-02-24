import React, { Component } from 'react'


export class NavBarSearch extends Component {

    constructor() {
        super();
        this.state = {tag:""};
    }
    
    keyUpHandler = (e) => {
        this.props.fnSearch(e.target.value);
    };

    handleChange = (event) => {
        this.setState({tag: event.target.value});
    };

    click = (e) => {
        this.setState({tag:""});
        this.props.fnRestore();
    };

    render() {
        const {tag} = this.state;  
        return (
            <div>
                 <nav className="teal lighten-2">
                    <div className="nav-wrapper">
                        <form>
                            <div className="input-field">
                            <input id="search" type="search" placeholder="Escribe vehiculo" value={tag} onChange={this.handleChange} onKeyUp={this.keyUpHandler} />
                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                            <i className="material-icons" onClick={this.click}>close</i>
                            </div>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBarSearch
