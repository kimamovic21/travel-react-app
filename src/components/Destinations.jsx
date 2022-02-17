import React from 'react';
import './DestinationsStyles.css';

import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import KeyWest from '../assets/keywest.jpg';

const Destinations = () => {
  return (
    <div name='destinations' className='destinations'>

        <div className="container">

            <h1>All-inclusive resorts</h1>
            <p>on the Caribbean's best beaches</p>

            <div className="img-container">
                    <img className="span-3 image-grid-row-2"
                     src={BoraBora} alt="/" />
                    <img src={BoraBora2} alt="/" />
                    <img src={Maldives} alt="/" />
                    <img src={Maldives2} alt="/" />
                    <img src={KeyWest} alt="/" />
            </div>

        </div>  {/* className="container" */}

    </div>  // className='destinations'
  )
}

export default Destinations