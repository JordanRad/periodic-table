import React ,{useState} from 'react';
import {elements} from '../data';
const Element = (props) => {
    const [hover,setHover] = useState('');
    let { num } = props;
    let element = elements[num];
    return (
        <div
            title={element.name}
            // onMouseEnter={this.onMouseEnter}
            // onMouseLeave={this.onMouseLeave}
            // onClick={this.openInfo}
            className={`element element-${num} ${element.category} ${hover ? 'active' : ''
                }`}>
            <div className="number">{element.number}</div>
            <div className="symbol">{element.symbol}</div>
            <div className="element-name">{element.name}</div>
        </div>
    );
}

export default Element;