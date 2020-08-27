import React from 'react';
import "../Slider/slider.css"

export default function Slider({link}) {
    return (
        <div id="slider">
            <img src={link} alt="" className="test123" />
        </div>
    )
}