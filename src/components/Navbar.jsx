import React, {useState} from 'react';
import './NavbarStyles.css';
import {BiSearch} from 'react-icons/bi';
import {BsPerson} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import {FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube} from 'react-icons/fa';
import {Link} from 'react-scroll';

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  return (
    //  <div className='navbar'> 
    <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}> 


        {/* <div className="logo"> */}
        <div className={nav ? 'logo dark' : 'logo'}>
            <h2>BEACHES.</h2>
        </div>

        <ul className="nav-menu">
            <Link to='home' smooth={true} duration={500}>
                <li>Home</li></Link>
            <Link to='destinations' smooth={true} duration={500}>
                <li>Destinations</li></Link>
            <Link to='carousel' smooth={true} duration={500}>
                <li>Travel</li></Link>
            <Link to='search' smooth={true} duration={500}>
                <li>Book</li></Link>
            <Link to='views' smooth={true} duration={500}>
                <li>Views</li></Link>
        </ul>

        <div className="nav-icons">
            <BiSearch className='icon' style={{marginRight:'1rem'}}/>
            <BsPerson className='icon'/>
        </div>

        <div className="hamburger"
             onClick={handleNav}>
                 {!nav ? (<GiHamburgerMenu className='icon'/>):
                         (<AiOutlineClose style={{color:"#000"}} 
                         className='icon'/>)}
        </div>

        {/* <div className="mobile-menu"> */}
        <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>

            <ul className="mobile-nav">
            <Link to='home' smooth={true} duration={500}>
                <li>Home</li></Link>
            <Link to='destinations' smooth={true} duration={500}>
                <li>Destinations</li></Link>
            <Link to='carousel' smooth={true} duration={500}>
                <li>Travel</li></Link>
            <Link to='search' smooth={true} duration={500}>
                <li>Book</li></Link>
            <Link to='views' smooth={true} duration={500}>
                <li>Views</li></Link>
            </ul>

            <div className="mobile-menu-bottom">

                <div className="menu-icons">
                    <button>Search</button>
                    <button>Account</button>
                </div>

                <div className="social-icons">
                    <FaFacebook  className='icon'/>
                    <FaInstagram className='icon'/>
                    <FaTwitter   className='icon'/>
                    <FaPinterest className='icon'/>
                    <FaYoutube   className='icon'/>
                </div>

            </div>  {/* className="mobile-menu-bottom" */}

        </div>  {/* className="mobile-menu" */}

    </div> //  className={nav ? 'navbar navbar-bg' : 'navbar'}
  )
}

export default Navbar