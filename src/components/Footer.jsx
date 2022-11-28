import React from 'react'
import {FiFacebook,FiLinkedin,FiGithub,FiTwitter} from "react-icons/fi";
const DATE=new Date().getFullYear()
const Footer = () => {
    return (

        <footer className="footer-distributed">

            <div className="footer-left">
                <h3>AnimeWorld<span>info</span></h3>
                <p className="footer-links">
                    <a href="/" className="link-1">Home</a>
                </p>

                <p className="footer-company-name" style={{color:"#FFF"}}>Anime world info@ {DATE}</p>
            </div>

            <div className="footer-center">
{/* 
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
                </div> */}
                <div>
                    <i className="fa fa-envelope"></i>
                    <p>Contact:<a href="mailto:jagadeeshgoud001.com">jagadeeshgoud00@gmail.com</a></p>
                </div>

            </div>

            <div className="footer-right">
                <p className="footer-company-about">
                    <span>About  me</span>
                    Im jagdeeshgongidi, currently pursuing bachelors degree in computer science.
                    Im aspiring to be a fullstack developer..
                </p>
                <div className="footer-icons">
                    <a href="https://www.linkedin.com/in/jagadeeshgongidi/"><FiLinkedin fontSize={35} color="white" /></a>
                    <a href="https://github.com/jagdeeshgongidi"><FiGithub fontSize={35} color="white" /></a>
                    <a href="https://www.facebook.com/Jagadeesh.gongidi/"><FiFacebook fontSize={35} color="white" /></a>
                    <a href="https://twitter.com/Jagadeshgongidi"><FiTwitter fontSize={35} color='white' /></a>

                </div>

            </div>

        </footer>

    )
}

export default Footer