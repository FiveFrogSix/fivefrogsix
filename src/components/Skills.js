import React, { Component } from 'react'


class Skills extends Component {

    
    render(){
        const skillBootstrap = '/img/skills/bootstrap.png';
        const skilljQuery = '/img/skills/jquery.png';
        const skilljavascript = '/img/skills/javascript.png';
        const skillPHP = '/img/skills/php.png';
        const skillSass = '/img/skills/Sass-Css.png';
        const skillCss = '/img/skills/css.png';
        const skillCI3 = '/img/skills/ci3.png';
        const skillNodejs= '/img/skills/nodejs.png';
        const skillReact = '/img/skills/react.png';
        const skillMySQL = '/img/skills/mysql.jpg';

        const skillPs = '/img/skills/photoshop.jpg';
        const skillFigma = '/img/skills/figma.png';
        const skillPhotopea = '/img/skills/photopea.png';
        
        const skillDavinci = '/img/skills/davinci.png';

        const skillPOE = '/img/skills/poe.png';
        const skillFortnite = '/img/skills/fornite.jpg';
        const skillMinecraft = '/img/skills/miencraft.png';

        const skillGit = '/img/skills/git.png';
        const skillUbuntu = '/img/skills/ubuntu.png';
        const skillPhpmyadmin = '/img/skills/phpmyadmin.jpg';
        const skillHedisql = '/img/skills/hedisql.png';
        const skillOffice = '/img/skills/office.png';


        function skillsElement(img, text){
            return  <div className="col text-center ">
                        <img className="img-skills rounded" src={img} alt="Bootstrap" />
                        <p className="fs-5 ">{text}</p>
                    </div>;
        }

        return(
            <section id="skills">
                <div className="col mt-3 text-center">
                    <span className="text-section fs-1">
                        Skills
                    </span>
                </div>
                <div className="col mt-3">
                    <p className="fs-5 text-center text-secondary">
                        ความสามารถต่างๆ
                    </p>
                </div>

                <div className="col-11 col-lg-9 mx-auto overflow-auto scroll-skills">
                    <ul className="nav justify-content-sm-center mb-3 flex-nowrap " id="pills-tab" role="tablist">
                        <li className="mx-0 mx-lg-5" role="presentation">
                            <button className="btn btn-pane active fs-2" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-web" type="button" role="tab" aria-controls="pills-web" aria-selected="true">Web </button>
                        </li>
                        <li className="mx-0 mx-lg-5"  role="presentation">
                            <button className="btn btn-pane fs-2" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-graph" type="button" role="tab" aria-controls="pills-graph" aria-selected="false">Graphic</button>
                        </li>
                        <li className="mx-0 mx-lg-5" role="presentation">
                            <button className="btn btn-pane fs-2" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-editor" type="button" role="tab" aria-controls="pills-editor" aria-selected="false">Editor</button>
                        </li>
                        <li className="mx-0 mx-lg-5" role="presentation">
                            <button className="btn btn-pane fs-2" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-gamer" type="button" role="tab" aria-controls="pills-gamer" aria-selected="false">Gamer</button>
                        </li>
                        <li className="mx-0 mx-lg-5" role="presentation">
                            <button className="btn btn-pane fs-2" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-other" type="button" role="tab" aria-controls="pills-other" aria-selected="false">Other</button>
                        </li>
                    </ul>
                </div>
                <div className="col-11 col-lg-5  mx-auto mt-5">
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active m-0" id="pills-web" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="row row-cols-2 row-cols-lg-4 g-3">
                                {skillsElement(skillPHP,'PHP')}
                                {skillsElement(skilljavascript,'JavaScript')}
                                {skillsElement(skillMySQL,'MySQL')}
                                {skillsElement(skillCss,'Css3')}
                                {skillsElement(skillBootstrap,'Bootstrap')}
                                {skillsElement(skillCI3,'Codgeigniter 3')}
                                {skillsElement(skilljQuery,'jQuery')}
                                {skillsElement(skillSass,'Sass')}
                                {skillsElement(skillNodejs, 'Nodejs (พึ่งศึกษา)')}
                                {skillsElement(skillReact, 'Reactjs (พึ่งศึกษา)')}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-graph" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className="row row-cols-2 row-cols-lg-4 g-3">
                                {skillsElement(skillPs,'Photoshop')}
                                {skillsElement(skillFigma,'Figma')}
                                {skillsElement(skillPhotopea,'Photopea')}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-editor" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <div className="row row-cols-2 row-cols-lg-4 g-3">
                                {skillsElement(skillDavinci,'Davinci Resolve')}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-gamer" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <div className="row row-cols-2 row-cols-lg-4 g-3">
                                {skillsElement(skillPOE,'Path of exile')}
                                {skillsElement(skillFortnite,'Fortnite')}
                                {skillsElement(skillMinecraft,'Minecraft')}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-other" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <div className="row row-cols-2 row-cols-lg-4 g-3">
                                {skillsElement(skillGit,'Git')}
                                {skillsElement(skillUbuntu,'Ubuntu')}
                                {skillsElement(skillPhpmyadmin,'Phpmyadmin')}
                                {skillsElement(skillHedisql,'HediSQL')}
                                {skillsElement(skillOffice,'Office (หลักๆ)')}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

        
}

export default Skills
