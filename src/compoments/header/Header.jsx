import React, { useState } from "react";
 import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-notagline.svg";
import { BsSearch } from "react-icons/bs";
import "./Header.css";


function Header() {
  let Navigate =useNavigate();

  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleClientPage =  () =>{
    Navigate("/Formclient")
  
  }
    
  return (
    <>
      <div className="container">
        <div className="header-hero">
          <div className="header-logo">
            <img src={logo} alt="logo" />
            <p className="number-phone">01 45 67 34 22 </p>
          </div>
          <div className="header-inscription">
            <div className="bar-search">
              <button className="icon-search" onClick={toggleSearch}>
                <BsSearch />
              </button>
              {isSearchVisible && (
                <form className="Fsearch">
                  <input id="search" type="search" placeholder="Search..." />
                </form>
              )}
            </div>
            <button  onClick={handleClientPage} className="btn-inscription">Souscrire en ligne</button>
            <div className="btn-client">Espace client</div>
          </div>
        </div>
        <div className="menus">
          <ul className="navigation-bar">
            <li>
              <NavLink exact to="/Assurance">
                Assurance vie
              </NavLink>
            </li>
            <li>
              <NavLink to="/Retraite">Retraite – PER</NavLink>
            </li>
            <li>
              <NavLink to="/SCPI">SCPI</NavLink>
            </li>
            <li>
              <NavLink exact to="/">
              Produits structurés
              </NavLink>
            </li>
            <li>
              <NavLink to="/">Autres placements</NavLink>
            </li>
            <li>
              <NavLink to="/">Comprendre l’épargne</NavLink>
            </li>
            <li>
              <NavLink to="/">
                    Découvrez-nouss</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
