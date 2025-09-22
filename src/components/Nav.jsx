import React, { useState } from "react";
import BearBnb from "../myassets/BearBnb.png";
import { FcHome, FcLandscape } from "react-icons/fc";
import { FaBellConcierge, FaMagnifyingGlass } from "react-icons/fa6";
import { SlGlobe } from "react-icons/sl";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);

  const toggleLanguageModal = () => {
    setIsLanguageModalOpen(!isLanguageModalOpen);
  }

  return (
    <div id="nav__main">
      <div className="nav__row">
        <div className="nav__logo--container" onClick={() => navigate("/")}>
          <img src={BearBnb} alt="" className="nav__logo" />
          <div className="nav__logo--title">bearbnb</div>
        </div>
        <div className="nav__links">
          <div className="nav__link">
            <div className="nav__link--icon">
              <FcHome />
            </div>
            <div className="nav__link--label">Homes</div>
          </div>
          <div className="nav__link">
            <div className="nav__link--icon">
              <FcLandscape />
            </div>
            <div className="nav__link--label">Experiences</div>
          </div>
          <div className="nav__link">
            <div className="nav__link--icon">
              <FaBellConcierge />
            </div>
            <div className="nav__link--label">Services</div>
          </div>
        </div>
        <div className="nav__left--container">
          <button className="host__btn nav__left--element" onClick={() => alert("Sorry this feature hasn't been implemented yet ;)")}>Become a host</button>
          <div className="language__modal nav__left--element" onClick={toggleLanguageModal}>
            <SlGlobe />
          </div>
          <div className="host__sidebar nav__left--element">
            <IoMenu />
          </div>
        </div>
      </div>
      <div className="nav__search--wrapper">
        <input
          type="text"
          className="searchbar"
          placeholder="Search destinations..."
        />
        <div className="nav__search--icon">
          <FaMagnifyingGlass />
        </div>
      </div>
      {isLanguageModalOpen && (
        <div className="modal__overlay" onClick={toggleLanguageModal}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <div className="modal__header">
              <h3>Choose a language and region</h3>
              <button className="modal__close--btn" onClick={toggleLanguageModal}>x</button>
            </div>
            <div className="modal__body">
              <div className="language__grid">
                <div className="language__option" onClick={() => {
                  console.log("English Selected");
                  setIsLanguageModalOpen(false); 
                }}>
                  <span className="language__name">English</span>
                  <span className="language__region">United States</span>
                </div>
                <div className="language__option" onClick={() => {
                  console.log("Spanish Selected");
                  setIsLanguageModalOpen(false); 
                }}>
                  <span className="language__name">Español</span>
                  <span className="language__region">España</span>
                </div>
                <div className="language__option" onClick={() => {
                  console.log("French Selected");
                  setIsLanguageModalOpen(false); 
                }}>
                  <span className="language__name">Français</span>
                  <span className="language__region">France</span>
                </div>
                <div className="language__option" onClick={() => {
                  console.log("German Selected");
                  setIsLanguageModalOpen(false); 
                }}>
                  <span className="language__name">Deutsch</span>
                  <span className="language__region">Deutschland</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
