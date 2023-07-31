import React, { useContext } from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Humble from '../../img/humble.png'
import Card from '../Card/Card';
import Glasses from '../../img/glasses.png'
import Resume from './Almaazresume.pdf'
import { themeContext } from '../../Context';


const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="services" id='Services'>
            <div className="awesome">
                <span style={{color: darkMode?"white":""}}>My Awesome</span>
                <span>Services</span>
                <spane>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Delectus sapi
                </spane>
                <a href={Resume} download>
                <button className="button s-button">Download CV</button>
                </a>
                
                <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
            </div>
            <div className="cards">
                <div style={{left: '14rem'}}>
                <Card
                    emoji={HeartEmoji}
                    heading = {'Developer'}
                    detail = {'Figma, sketch,PS, Adoobe,adfasdfasdfasdfasdfasdf'} 
                    />
                </div>
                <div style={{top:'12rem', left:'-4rem'}}>
                    <Card
                    emoji={Glasses}
                    heading = {'Developer'}
                    detail = {'Figma, sketch,PS, Adoobe,afdasdasdasdvasccasc'} 
                    />
                </div>
                <div style={{top:'19rem', left:'12rem'}}>
                    <Card
                    emoji={Humble}
                    heading = {'UI/Ux'}
                    detail = {'Figma, sketch,PS, Adoobe,asdfasdfafawrgdbsdvbs'} 
                    />
                </div>
                <div className='blur s-blur2' style={{background: 'var(--purple)'}}></div>

            </div>
        </div>
    )
}

export default Services