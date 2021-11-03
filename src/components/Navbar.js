import React, { Component } from 'react'
import NavItems from './NavItems'



class Navbar extends Component {
    constructor (props){
        super(props);

        this.handleClickClass = this.handleClickClass.bind(this);
        this.linkMainClass = this.linkMainClass.bind(this);

        this.state = {
            active: false,
        };

    }

    handleClickClass() {
        const currentState = this.state.active;
        this.setState(
            { 
                active: !currentState,
            }
        );
    }

    linkMainClass() {
        const hasClass = document.querySelector('.navbar-toggler').classList;
        const hasClassCollapse = document.querySelector('.navbar-collapse').classList;
        const hasClassContainer = document.querySelector('#navbarContainer').classList;

        if(hasClass.contains('active')){
            hasClass.remove("active");
            hasClassCollapse.remove('show');
            hasClassContainer.remove('bg-dark');
            this.setState({active: false});
        }
    }

    render(){
        
        const backdrop = {
            zIndex: '-1',
            height: '180vh',
            width: '100vw',
            backgroundColor: 'rgba(0,0,0,0.1)'
        }
        
        return (
        
            
            <nav id="MainNavbar" className="navbar navbar-dark  navbar-expand-lg fixed-top p-0 ">
                <div id="navbarContainer" className={`container-fluid p-0 ${this.state.active ? "bg-dark" : ""}`}>
                    <button onClick={this.handleClickClass} className={`navbar-toggler btn-nav ${this.state.active ? "active" : ""}  ms-auto border-0 mt-2 me-2`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>

                    <div id="navbarDropdown" className={`collapse navbar-collapse`}>
                        <ul className={`navbar-nav ms-lg-auto text-center text-lg-start fs-4 pb-4`}>
                            <NavItems item="Home" tolink="#intro" toClick={this.linkMainClass}></NavItems>
                            <NavItems item="About" tolink="#aboutme" toClick={this.linkMainClass}></NavItems>
                            <NavItems item="Skills" tolink="#skills" toClick={this.linkMainClass}></NavItems>
                            <NavItems item="Experience" tolink="#experience" toClick={this.linkMainClass}></NavItems>
                            <NavItems item="Contact" tolink="#contact" toClick={this.linkMainClass}></NavItems>
                        </ul>
                    </div>
                </div>
                <div   className={`backdrop-navbar position-fixed ${this.state.active ? "d-block" : "d-none"}`} style={backdrop} onClick={this.linkMainClass} ></div>
            </nav>
            
        )
    }
}

export default Navbar;