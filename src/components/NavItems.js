import React, { Component } from 'react'


class NavItems extends Component {
    

    render(){
        
        return (
            <li className="nav-item ">
                <a href={this.props.tolink} onClick={this.props.toClick} className={`nav-link mx-2`}  >{this.props.item}</a> 
            </li>

        )
    }
}

export default NavItems