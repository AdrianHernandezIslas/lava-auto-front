import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export class Sidenav extends Component {
    

    render() {
        
        return (
            <div >
                <ul id="slide-out" className="sidenav">
                    <li><div className="user-view">
                    <div className="background">
                        <img src="https://i.pinimg.com/736x/eb/bc/56/ebbc5627d62741555393eef7eabc8cd6.jpg" alt=""/>
                    </div>
                    <a href="#user"><img className="circle" src="" alt="" /></a>
                    <a href="#name"><span className="white-text name">John Doe</span></a>
                    <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                    </div></li>
                   
                        <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                        <li><a href="#!">Second Link</a></li>
                        <li><div className="divider"></div></li>
                        <li><a className="subheader">Subheader</a></li>
                        <li> <Link to="/card">Inicio</Link></li>
                    
                </ul>
                
            </div>
        )
    }
}

export default Sidenav
