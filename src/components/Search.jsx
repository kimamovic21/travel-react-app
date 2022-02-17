import React from 'react';
import './SearchStyles.css';
import Gold from '../assets/gold.png';

const Search = () => {
  return (
    <div name='book' className='search'>

        <div className="container">

            <div className="left">
                <h2>Luxury included vacations for two people</h2>
                <p>Lorem ipsum dolor, sit amet consectetur 
                    adipisicing elit. Aspernatur provident quo
                     esse culpa accusamus, quas maxime, aperiam
                      perferendis pariatur qui magni voluptas ut 
                      excepturi totam repudiandae facilis quae 
                      sequi quibusdam voluptatum tenetur quasi, 
                      soluta necessitatibus libero asperiores. 
                      Assumenda quam sunt perferendis nemo 
                      inventore! Tempora, aut! Dolorem corporis 
                      similique atque impedit?</p>

                <div className="search-col-2">

                    <div className="box">
                        <div>
                            <img src={Gold} 
                                alt="/" 
                                style={{marginRight:"1rem"}}/>    
                        </div>
                        <div>
                            <h3>World's leading </h3>
                            <p>all-inclusive company for 20 years in a row</p>
                        </div>
                    </div>

                    <div className="box">
                        <div>
                            <h3>No one includes more</h3>
                            <p>all-inclusive company for 20 years in a row</p>
                            <button>View packages</button>
                        </div>
                    </div>

                </div>  {/* className="search-col-2" */}

            </div> {/* className="left" */}


            <div className="right">

                <div className="promo">
                    <h4 className="save">Get an additional 7% off</h4>
                    <p className="timer">12 hours left</p>
                    <p className="offers">View all current offers</p>
                </div>

                <form>

                    <div className="input-wrap">
                        <label>Destination</label>
                        <select>
                            <option value="1">Grande Antigua</option>
                            <option value="1">Grenada</option>
                            <option value="1">Emerald bay</option>
                            <option value="1">Bora Bora</option>
                            <option value="1">Grande Key West</option>
                            <option value="1">Maldives</option>
                            <option value="1">Barbados</option>
                        </select>
                    </div>

                    <div className="date">
                        <div className="input-wrap">
                            <label>Check-in</label>
                            <input type="date" />
                        </div>
                        <div className="input-wrap">
                            <label>Check-out</label>
                            <input type="date" />
                        </div>
                    </div>

                    <button>Rates & availabilities</button>

                </form>

            </div>  {/* className="right" */}


        </div>  {/* className="container" */}


    </div>  // className='search'
  )
}

export default Search