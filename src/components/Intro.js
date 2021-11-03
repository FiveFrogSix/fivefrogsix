import React, { Component } from 'react'


class Intro extends Component {
    
    render(){
        const IntroVid = '/videos/Intro.mp4';
        
        return (
            <section id="intro" className="col-12 bg-dark text-white position-relative" style={{height:'100vh'}} >
                <div className="position-absolute filter-dark-1 w-100 h-100"></div>
                <div className="position-absolute" style={{bottom:'10vh',left:'5vw'}}>
                    <p className="fs-big-2 mb-0 typewriter">Tirawat Saijai</p>
                    <p className="fs-big-1">FiveFrogSix</p>
                </div>
                <video className="vid-content" autoPlay={true} loop={true} muted>
                    <source src={IntroVid} type="video/mp4"/>
                </video>
            </section>
        )
    }
}

export default Intro