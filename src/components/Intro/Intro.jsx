import React, { useContext } from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png';
import almaaz from '../../img/almaaz.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import {motion} from 'framer-motion';
import { Link } from "react-scroll";

const Intro = () => {
    const transition = {duration: 2, type: 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode?'white':''}}>Hi! I am</span>
                    <span>Almaaz Ahmed</span>
                    <span>Front end developer with high level of experience in web desiging and deveopment, prodution, producing the quality work</span>
                </div>
                <Link to="contact" spy={true} smooth={true}>
                <button className="button i-button">Hire Me</button>
                </Link>
                <div className="i-icons">
                    <a href="https://github.com/almaaz7"><img src={Github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/almaazahmed/"><img src={LinkedIn} alt="" /></a>
                    <a href="https://www.instagram.com/_almaaz11/"><img src={Instagram} alt="" /></a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={almaaz} alt="" />
                <motion.img
                initial={{left:'-36%'}}
                whileInView={{left:'-24%'}} 
                transition={transition}
                src={glassesimoji} alt="" />
                <motion.div 
                initial={{top:'-4%', left:'74%' }}
                whileInView={{left:'68%'}} 
                transition={transition}
                style={{ top: '-4%', left: '68%' }}
                className='floating-div'>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                </motion.div>
                <motion.div 
                initial={{left:'9rem', top:'18rem'}}
                whileInView={{left:'4rem'}} 
                transition={transition}
                style={{ top: '18rem', left: '2rem' }}
                className='floating-div'>
                    <FloatingDiv image={thumbup} txt1='Front End    ' txt2='Developer' />
                </motion.div>
                <div className='blur' style={{ background: 'rgb(238 210 255' }}>

                </div>

                <div className="blur"
                style={{ background: '#C1F5FF' ,top:'17rem', width:'21rem', height:'11rem', left:'-9rem'  }}></div>
            </div>
        </div>
    )
}

export default Intro