import React from 'react';
import "../Content/Content.css"

export default function Content(props) {
    return (
        <div className="img-flex">
            <img src={props.link} className="images" alt="" />
        </div>
    )
}
