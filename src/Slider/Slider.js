import React from 'react';
import "../Slider/slider.css"

export default function Slider({link, next, previous}) {
    return (
        <div id="slider">
            <div className="img-flex">
                <img src={link} alt="" className="sliderImage" />
            </div>
            <div className="button-flex">
                <button onClick={previous} >Previous</button>
                <button onClick={next} >Next</button>
            </div>
        </div>
    )
}