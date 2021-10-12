import React, { Component } from 'react'


class NavItems extends Component {
    
    render(){
        
        return (
            <li className="nav-item">
                <a className="nav-link mx-2" href={this.props.tolink}>{this.props.item}</a> 
            </li>

        )
    }
}

export default NavItems