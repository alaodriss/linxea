import React, { useState } from "react";
// import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-notagline.svg";
import { BsSearch } from "react-icons/bs";
import "./Header.css";

function Header() {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

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
                <form>
                  <input type="search" placeholder="Search..." />
                </form>
              )}
            </div>
            <div className="btn-inscription">Souscrire en ligne</div>
            <div className="btn-client">Espace client</div>
          </div>
        </div>
        <div className="menus">
          <ul className="navigation-bar">
            <li>
              <a exact to="/">
                Assurance vie
              </a>
            </li>
            <li>
              <a to="/">Retraite – PER</a>
            </li>
            <li>
              <a to="/">SCPI</a>
            </li>
            <li>
              <a exact to="/">
              Produits structurés
              </a>
            </li>
            <li>
              <a to="/">Autres placements</a>
            </li>
            <li>
              <a to="/">Comprendre l’épargne</a>
            </li>
            <li>
              <a to="/">
                    Découvrez-nouss</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
