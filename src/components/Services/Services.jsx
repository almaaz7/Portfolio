import React, { useContext } from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Humble from '../../img/humble.png'
import Card from '../Card/Card';
import Glasses from '../../img/glasses.png'
import Resume from './Almaazresume.pdf'
import { themeContext } from '../../Context';
import {motion} from 'framer-motion';


const Services = () => {
    const transition = {duration: 2, type: 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="services" id='Services'>
            <div className="awesome">
                <span style={{color: darkMode?"white":""}}>My Awesome</span>
                <span>Projects</span>
                <spane>Welcome to my project showcase! Below are some of the exciting projects<br/> I've had the privilege to work on. Each project represents a unique journey<br/> of creativity, innovation, and problem-solving. Take a look and explore the <br/>diverse range of skills and technologies I've applied.
                </spane>
                <a href={Resume} download>
                <button className="button s-button">Download CV</button>
                </a>
                
                <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
            </div>
            <div className="cards">
                
                <motion.div 
                initial={{top:'-4%', left:'95%' }}
                whileInView={{left:'60%'}} 
                transition={transition}
                style={{ top: '-4%', left: '68%' }}
                className='floating-div'>
                    <div style={{left: '14rem'}}>
                <Card
                    emoji={HeartEmoji}
                    heading = {'AI image Generator'}
                    detail = {'React, Tailwind CSS, Vite, NodeJS, ExpressJS, MongoDB, Git, JavaScript'} 
                    link = {'https://dall-e-error-project.netlify.app/'}
                    />
                </div>
                </motion.div>
                <motion.div 
                initial={{top:'35%', left:'-40%' }}
                whileInView={{left:'-15%'}} 
                transition={transition}
                style={{ top: '40%', left: '10%' }}
                className='floating-div'>
                    <div style={{top:'12rem', left:'-4rem'}}>
                    <Card
                    emoji={Glasses}
                    heading = {'Keeper'}
                    detail = {'ReactJS, CSS, HTML, JavaScript, Git, Redux Toolkit, Axios'} 
                    link={'https://keeper-error.netlify.app/'}
                    />
                </div>
                </motion.div>
                
                <motion.div 
                initial={{top:'55%', left:'70%' }}
                whileInView={{left:'50%'}} 
                transition={transition}
                style={{ top: '-4%', left: '68%' }}
                className='floating-div'>
                    <div style={{top:'19rem', left:'12rem'}}>
                    <Card
                    emoji={Humble}
                    heading = {'RazorPay Clone'}
                    detail = {'HTML, CSS'} 
                    link={'https://razorpay-clone-error-project.netlify.app/'}
                    />
                </div>
                </motion.div>
                
                <div className='blur s-blur2' style={{background: 'var(--purple)'}}></div>

            </div>
        </div>
    )
}

export default Services