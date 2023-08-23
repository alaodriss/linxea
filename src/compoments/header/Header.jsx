import React, { useState } from 'react'
import logo from '../../assets/images/logo-notagline.svg'
import { BsSearch } from 'react-icons/bs';
import './Header.css'

function Header() {

    const [isSearchVisible, setSearchVisible] = useState(false);

    const toggleSearch = () => {
        setSearchVisible(!isSearchVisible);
      };

  return (
    <>
      <div className='container'>
            <div className='header-hero'>
                   <div className='header-logo'>
                        <img src={logo} alt='logo' />
                        <p className='number-phone'>01 45 67 34 22 </p>
                    </div> 
                    <div className='header-inscription'>
                    <div className="bar-search">
                            <button className="icon-search" onClick={toggleSearch}>
                            <BsSearch />
                            </button>
                            {isSearchVisible && (
                                <form>
                                <input type="search" placeholder="Search..." />
                                </form>
                            )}
                            </div>
                        <button className='btn-inscription'>Souscrire en ligne</button>
                        <button className='btn-client'>Espace client</button>
                    </div>
            </div>
            <div className='menus'>
            
            </div>
      </div>
    </>
  )
}

export default Header