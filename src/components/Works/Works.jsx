import React, { useContext } from 'react'
import './Works.css'
// import Upwork from '../../img/Upwork.png'
import react from '../../img/react.png'
import CSS from '../../img/css.png'
import redux from '../../img/redux.png'
import js from '../../img/js.png'
import node from '../../img/node.png'
// import Fiverr from '../../img/fiverr.png'
// import Amazon from '../../img/amazon.png'
// import Shopify from '../../img/Shopify.png'
// import Facebook from '../../img/Facebook.png'
import { themeContext } from '../../Context'
import {motion} from 'framer-motion';


const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    
    return (
        <div className="works">
            <div className="awesome">
                <span style={{color: darkMode?'white':''}}>Worked on Various</span>
                <span>Technologies</span>
                <spane>Diving into the digital realm, I've explored a myriad of technologies
                    <br />
                    that power innovation. From coding to design,<br />
                    here's a glimpse into my journey through the dynamic<br />
                    landscape of technology.
                </spane>

                <button className="button s-button">Hire Me</button>

                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            <div className="w-right">
            <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
                    <div className="w-secCircle" >
                        <img  style={{height:150,width: 150}} src={CSS} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img style={{height:150,width: 150}} src={node} alt="" />
                    </div>
                    <div className="w-secCircle" >
                        <img style={{height:200,width: 230}} src={react} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img style={{height:150,width: 150}} src={js} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img style={{height:140,width: 140}} src={redux} alt="" />
                    </div>
                </motion.div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works