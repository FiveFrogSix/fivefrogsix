import React, { Component } from 'react'
import NavItems from './NavItems'

class Navbar extends Component {
    constructor (props){
        super(props);
        
    }

    render(){
        return (
            <nav className="navbar navbar-dark navbar-expand fixed-top p-0 ">
                <div className="container-fluid p-0">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto fs-5">
                            <NavItems item="Home" tolink="/"></NavItems>
                            <NavItems item="About" tolink="#aboutme"></NavItems>
                            <NavItems item="Skills" tolink="#skills"></NavItems>
                            <NavItems item="Experience" tolink="#experience"></NavItems>
                            <NavItems item="Contact" tolink="#contact"></NavItems>
                        </ul>
                    </div>                    
                </div>
            </nav>
        )
    }
}

export default Navbar;