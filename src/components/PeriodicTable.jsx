import React, { useState } from 'react';
import Element from './Element';
import { elements } from '../data';
const PeriodicTable = (props) => {
    const [selectedElement, setSelectedElement] = useState(0);
    const [isOpen, setIsOpen] = useState(false)
    const showInfo = (e, num) => {
        setSelectedElement(elements[num])
        setIsOpen(true)
    }
    const closeInfo = (e) => {
        setSelectedElement(0)
        setIsOpen(false)
    }
    return (
        <div id="table">
            <Element showInfo={showInfo} num="1" />
            <Element showInfo={showInfo} num="2" />
        </div>
    );
}

export default PeriodicTable;