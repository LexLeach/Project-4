import React from 'react';
import MenuIcon from "../Header/images/hamburger-solid.png"
import Anime from "../Header/images/anime.png"
import London from "../Header/images/london.png"
import Australia from "../Header/images/australia.png"
import Popular from "../Header/images/popular.png"
import "../Header/header.css"

export default function Header({menu}) {
    return (
        <header>
            <div className="header flex">
                    <input type="checkbox" id="menu-toggle" />
                <label htmlFor="menu-toggle" className="menu-icon">
                    <img src={MenuIcon} alt="" className="hbicon" />
                </label>
                    <div className="slideout-sidebar">
                        <ul>
                        <li><button id="popular">
                        <img src={Popular} alt="" className="hbicon" />
                            Popular Gallery
                            </button></li>
                        <li><button id="anime">
                        <img src={Anime} alt="" className="hbicon" />
                            Anime Gallery
                            </button></li>
                        <li><button id="london">
                        <img src={London} alt="" className="hbicon" />
                            London Gallery
                            </button></li>
                        <li><button id="australia">
                        <img src={Australia} alt="" className="hbicon" />
                            Australia Gallery
                            </button></li>
                        </ul>
                    </div>
                </div>
            <h1>Uh....this isn't kanas Dorothy...</h1>
            <form id="form">
                    <input type="text" id="search" data-toggle="false" />
                    <input type="submit" id="submit" value="Submit me Senpai" />
                </form>
        </header>
    );
  }