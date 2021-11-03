import React, { Component } from 'react'


class Aboutme extends Component {

    myAge = hbd => {
        const today = new Date();
        const birthDate = new Date(hbd);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age--;
        }
        return age;
    }

    render(){
            const profileImg = '/img/avatar-profile.jpg';
            const profileImg2 = '/img/real-profile.jpg';

            const AgeIcon = '/img/icon/balloons.png';
            const HeightIcon = '/img/icon/trees.png';
            const WeightIcon = '/img/icon/dumbbell.png';

            

        return(
            <section id="aboutme" className="col-12 bg-dark-1 pb-5"> 
            {/* style={{height:'100vh'}} */}
                <div className="text-center text-light pt-5">
                    <h1>
                        <span className="me-3">
                            About
                        </span>
                        <span className="text-primary">
                            me
                        </span>
                    </h1>
                    <div className="d-inline img-avatar mx-auto">
                        <img className="img-profile p-0 m-0" src={profileImg} alt="profile" />
                        <img className="img-profile-real top-50 start-50 translate-middle p-0 m-0" src={profileImg2} alt="profile" />
                    </div>


                    <p className="mx-auto mt-4 text-secondary w-80 w-lg-50" style={
                        {
                            fontSize: '1.1rem',
                            letterSpacing: '1px'
                        }
                    }>
                        สวัสดีครับผม ถิรวัฒน์ สายใจ ชื่อเล่นบีม เป็นโปรแแกรมเมอร์ชอบทำส่วนของเว็บไซต์ สามารถทำได้ทั้งหน้าบ้านและหลังบ้าน แต่ที่ถนัดและชอบจะเป็นส่วนของหน้าบ้านเพราะชอบตอนที่ได้ทำเว็บตามที่ทีมออกแบบมาหรืออกแบบเองแล้วเป็นไปตามที่ออกแบบ
                        ชอบความสนุกตอนได้เขียน CSS และ JS ถึงตอนนี้ผมยังไม่เก่งแต่ผมก็พร้อมพัฒนาตัวเองอยู่เสมอและจะพยายามเป็นคนเก่งและเข็นโปรเจ็คเล็กใหญ่ขึ้น github ต่อไป <br />
                        พร้อมศึกษาเรื่องใหม่ๆ แต่ขอเวลาให้ผมหน่อยนะ
                    </p>

                    <div className="row row-cols-1 row-cols-md-3 m-0 w-100 w-md-80 w-xl-60 mx-auto mt-5">

                        <div className="col d-flex justify-content-center about-content">
                            <div className="px-3 my-auto">
                                <img className="about-icon" src={AgeIcon} alt="ไอคอนอายุ" />
                            </div>
                            <div className="w-25 w-md-100">
                                <p className="about-head">อายุ</p>
                                <p className="about-content">{this.myAge('1995-11-22')} ปี</p>
                            </div>
                        </div>

                        <div className="col d-flex justify-content-center mt-4 mt-md-0 about-content">
                            <div className="px-3 my-auto">
                                <img className="about-icon" src={HeightIcon} alt="ไอคอนอายุ" />
                            </div>
                            <div className="w-25 w-md-100">
                                <p className="about-head">ส่วนสูง</p>
                                <p className="about-content">183 ซม.</p>
                            </div>
                        </div>

                        <div className="col d-flex justify-content-center mt-4 mt-md-0 about-content">
                            <div className="px-3 my-auto">
                                <img className="about-icon" src={WeightIcon} alt="ไอคอนอายุ" />
                            </div>
                            <div className="w-25 w-md-100">
                                <p className="about-head">น้ำหนัก</p>
                                <p className="about-content">94 กก.</p>
                            </div>
                        </div>

                        

                    </div>

                </div>
            </section>
        )
    } 
}


export default Aboutme

