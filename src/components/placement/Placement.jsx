import React from 'react'
import Nav from '../nav/nav'
import headerImg from "../../asset/palcement/header.jpg"
import placement1 from "../../asset/palcement/placement1.jpeg"
import placement2 from "../../asset/palcement/placement2.jpeg"
import placement3 from "../../asset/palcement/placement3.jpeg"

const Placement = () => {
    return (
        <div id='Placement'>
            <Nav />

            <header style={{ backgroundColor: "rgba(250,250,250,255)" }} className='md:flex md:h[500px]'>
                <img src={headerImg} alt="" className='md:w-1/2' />
                <div className=" " style={{ display: 'flex', alignItems: 'center' }}>

                    <p style={{ alignItems: 'center', width: '80%', textAlign: "center", fontSize: "2vw" }}>We bridge education and industry, empowering students with essential skills through a robust placement program to meet job market demands.</p>
                </div>
            </header>


            <div >
                <h2 style={{ textAlign: 'center', margin: "20px 0" }}>Developers have cracked careers.</h2>
                <div style={{display:"flex", flexWrap:'wrap'}}>
                    <img src={placement1} alt="" className='md:w-1/3 md:h-1/2 md:p-5 bg-gray-300 md:m-5'/>
                    <img src={placement2} alt="" className='md:w-1/3 md:h-1/2 md:p-5'/>
                    <img src={placement3} alt="" className='md:w-1/3 md:h-1/2 md:p-5'/>
                </div>
            </div>
        </div>
    )
}

export default Placement