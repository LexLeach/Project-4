import React from 'react';
import "../Content/Content.css"

export default function Content(props) {
    return (
        <img src={props.link} className="images" alt="" />
    )
}
