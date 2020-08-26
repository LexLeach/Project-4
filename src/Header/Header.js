import React from 'react';
import "../Header/header.css"

export default function Header({menu}) {
    return (
        <header>
            <div class="header flex">
                    <input type="checkbox" id="menu-toggle" />
                    <label for="menu-toggle" class="menu-icon">{menu}</label>
                    <div class="slideout-sidebar">
                        <ul>
                            <li><button id="popular">Popular Gallery</button></li>
                            <li><button id="anime">Anime Gallery</button></li>
                            <li><button id="london">London Gallery</button></li>
                            <li><button id="australia">Australia Gallery</button></li>
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