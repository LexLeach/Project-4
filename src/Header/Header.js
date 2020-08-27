import React from 'react';
import MenuIcon from "../Header/images/hamburger-solid.png"
import Anime from "../Header/images/anime.png"
import London from "../Header/images/london.png"
import Australia from "../Header/images/australia.png"
import Popular from "../Header/images/popular.png"
import Search from "../Header/images/search.png"
import Tornado from "../Header/images/tornado.png"
import "../Header/header.css"

export default function Header() {
    return (
        <header id="hdr">
            <div className="header flex">
                <input type="checkbox" id="menu-toggle" />
                <label htmlFor="menu-toggle" className="menu-icon">
                    <img src={MenuIcon} alt="" className="hbicon" />
                </label>
                <div className="slideout-sidebar">
                    <ul>
                    <li><button id="popular">
                    <img src={Popular} alt="" className="hbicon" />
                        <p>Popular Gallery</p>
                        </button></li>
                    <li><button id="anime">
                    <img src={Anime} alt="" className="hbicon" />
                        <p>Anime Gallery</p>
                        </button></li>
                    <li><button id="london">
                    <img src={London} alt="" className="hbicon" />
                        <p>London Gallery</p>
                        </button></li>
                    <li><button id="australia">
                    <img src={Australia} alt="" className="hbicon" />
                        <p>Australia Gallery</p>
                        </button></li>
                    </ul>
                </div>
            </div>
            <h1>Uh....this isn't kanas Dorothy...<img src={Tornado} alt="" className="twister" /></h1>
            <form id="form">
                    <input type="text" id="search" data-toggle="false" placeholder="Search..." />
                    <img src={Search} alt="" id="submit" />
                </form>
        </header>
    );
  }