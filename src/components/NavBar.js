import React, { Component } from 'react'


export class NavBar extends Component {

    render() {
        const {name} = this.props;
        return (
            <div>
                <nav className="navbar-fixed teal lighten-2">
                <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <div className="nav-wrapper">
                    <a href="#!" className="brand-logo center">{name}</a>
                    
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar
