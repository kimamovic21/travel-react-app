import React from 'react';
import './HeroStyles.css';
import Video from '../assets/maldivesVideo.mp4';
import { AiOutlineSearch } from 'react-icons/ai';

const Hero = () => {
  return (
    <div className='hero'>

        <video autoPlay loop muted 
               className="video"
               src={Video} 
               type="video/mp4">
        </video>

        <div className="overlay">

        </div>
        <div className="content">
            <h1>First class travel</h1>
            <h2>top 1% locations worldwide</h2>
            <form className='form'>
                <div>
                    <input type="text" placeholder='Search destinations'/>
                </div>
                <div>
                    <button><AiOutlineSearch className='icon'/></button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Hero