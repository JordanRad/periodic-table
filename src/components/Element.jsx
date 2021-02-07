import React, { useState } from 'react';
import { elements } from '../data';
const Element = (props) => {
    const [hover, setHover] = useState('');
    let { num } = props;
    let element = elements[num];

    const openInfo = (event) => {props.showInfo(event, num)}
    const onMouseEnter = (event) => {setHover(true)}
    const onMouseLeave = (event) => {setHover(false)}
    return (
        <div
            title={element.name}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={openInfo}
            className={`element element-${num} 
            ${element.category} ${hover ? 'active' : ''}`}>
            <div className="number">{element.number}</div>
            <div className="symbol">{element.symbol}</div>
            <div className="element-name">{element.name}</div>
        </div>
    );
}

export default Element;