import React from 'react'
import BearBnb from '../myassets/BearBnb.png'
import { FcHome, FcLandscape } from "react-icons/fc"
import { FaBellConcierge } from "react-icons/fa6"
import { SlGlobe } from "react-icons/sl";
import { IoMenu } from "react-icons/io5";


const Nav = () => {
  return (
    <div>
      <div className="nav__row">
        <div className="nav__logo--container">
          <img src={BearBnb} alt="" className="nav__logo" />
          <div className="nav__logo--title">bearbnb</div>
        </div>
        <div className="nav__links">
            <div className="nav__link">
                <div className="nav__link--icon"><FcHome/></div>
                <div className="nav__link--label">Homes</div>
            </div>
            <div className="nav__link">
                <div className="nav__link--icon"><FcLandscape /></div>
                <div className="nav__link--label">Experiences</div>
            </div>
            <div className="nav__link">
                <div className="nav__link--icon"><FaBellConcierge/></div>
                <div className="nav__link--label">Services</div>
            </div>
        </div>
        <div className="nav__left--container">
            <div className="host__btn nav__left--element">Become a host</div>
            <div className="language__modal nav__left--element"><SlGlobe /></div>
            <div className="host__sidebar nav__left--element"><IoMenu /></div>
        </div>
      </div>
    </div>
  )
}

export default Nav
