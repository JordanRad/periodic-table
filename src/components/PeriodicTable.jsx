import React, { useState } from 'react';
import Element from './Element';
import Info from './Info';
import { elements } from '../data';
const PeriodicTable = () => {
    const [selectedElement, setSelectedElement] = useState(0);
    const [isOpen, setIsOpen] = useState(false)
    const showInfo = (e, num) => {
        console.log("selected",elements[num])
        setSelectedElement(elements[num])
        setIsOpen(true)
    }
    const closeInfo = (e) => {
        setSelectedElement(0)
        setIsOpen(false)
    }
    console.log(selectedElement)
    return (
        <div id="table">
            <Element showInfo={showInfo} num="1" />
            <Element showInfo={showInfo} num="2" />
            <Element showInfo={showInfo} num="3" />
            <Element showInfo={showInfo} num="4" />
            {isOpen?
            <Info closeInfo={closeInfo} el={selectedElement}/>:""
}
            <Element showInfo={showInfo} num="5" />
            <Element showInfo={showInfo} num="6" />
            <Element showInfo={showInfo} num="7" />
            <Element showInfo={showInfo} num="8" />
            <Element showInfo={showInfo} num="9" />
            <Element showInfo={showInfo} num="10" />
            <Element showInfo={showInfo} num="11" />
            <Element showInfo={showInfo} num="12" />
            <Element showInfo={showInfo} num="13" />
            <Element showInfo={showInfo} num="14" />
            <Element showInfo={showInfo} num="15" />
            <Element showInfo={showInfo} num="16" />
            <Element showInfo={showInfo} num="17" />
            <Element showInfo={showInfo} num="18" />
            <Element showInfo={showInfo} num="19" />
            <Element showInfo={showInfo} num="20" />
            <Element showInfo={showInfo} num="21" />
            <Element showInfo={showInfo} num="22" />
            <Element showInfo={showInfo} num="23" />
            <Element showInfo={showInfo} num="24" />
            <Element showInfo={showInfo} num="25" />
            <Element showInfo={showInfo} num="26" />
            <Element showInfo={showInfo} num="27" />
            <Element showInfo={showInfo} num="28" />
            <Element showInfo={showInfo} num="29" />
            <Element showInfo={showInfo} num="30" />
            <Element showInfo={showInfo} num="31" />
            <Element showInfo={showInfo} num="32" />
            <Element showInfo={showInfo} num="33" />
            <Element showInfo={showInfo} num="34" />
            <Element showInfo={showInfo} num="35" />
            <Element showInfo={showInfo} num="36" />
            <Element showInfo={showInfo} num="37" />
            <Element showInfo={showInfo} num="38" />
            <Element showInfo={showInfo} num="39" />
            <Element showInfo={showInfo} num="40" />
            <Element showInfo={showInfo} num="41" />
            <Element showInfo={showInfo} num="42" />
            <Element showInfo={showInfo} num="43" />
            <Element showInfo={showInfo} num="44" />
            <Element showInfo={showInfo} num="45" />
            <Element showInfo={showInfo} num="46" />
            <Element showInfo={showInfo} num="47" />
            <Element showInfo={showInfo} num="48" />
            <Element showInfo={showInfo} num="49" />
            <Element showInfo={showInfo} num="50" />
            <Element showInfo={showInfo} num="51" />
            <Element showInfo={showInfo} num="52" />
            <Element showInfo={showInfo} num="53" />
            <Element showInfo={showInfo} num="54" />
            <Element showInfo={showInfo} num="55" />
            <Element showInfo={showInfo} num="56" />
            <Element showInfo={showInfo} num="57" />

            {/* Lanthanoids split */}
            <Element showInfo={showInfo} num="72" />
            <Element showInfo={showInfo} num="73" />
            <Element showInfo={showInfo} num="74" />
            <Element showInfo={showInfo} num="75" />
            <Element showInfo={showInfo} num="76" />
            <Element showInfo={showInfo} num="77" />
            <Element showInfo={showInfo} num="78" />
            <Element showInfo={showInfo} num="79" />
            <Element showInfo={showInfo} num="80" />
            <Element showInfo={showInfo} num="81" />
            <Element showInfo={showInfo} num="82" />
            <Element showInfo={showInfo} num="83" />
            <Element showInfo={showInfo} num="84" />
            <Element showInfo={showInfo} num="85" />
            <Element showInfo={showInfo} num="86" />
            <Element showInfo={showInfo} num="87" />
            <Element showInfo={showInfo} num="88" />
            <Element showInfo={showInfo} num="89" />
            {/* Actinoids split */}
            <Element showInfo={showInfo} num="104" />
            <Element showInfo={showInfo} num="105" />
            <Element showInfo={showInfo} num="106" />
            <Element showInfo={showInfo} num="107" />
            <Element showInfo={showInfo} num="108" />
            <Element showInfo={showInfo} num="109" />
            <Element showInfo={showInfo} num="110" />
            <Element showInfo={showInfo} num="111" />
            <Element showInfo={showInfo} num="112" />
            <Element showInfo={showInfo} num="113" />
            <Element showInfo={showInfo} num="114" />
            <Element showInfo={showInfo} num="115" />
            <Element showInfo={showInfo} num="116" />
            <Element showInfo={showInfo} num="117" />
            <Element showInfo={showInfo} num="118" />
            <Element showInfo={showInfo} num="119" />
            {/* Lanthenoids */}
            <Element showInfo={showInfo} num="58" />
            <Element showInfo={showInfo} num="59" />
            <Element showInfo={showInfo} num="60" />
            <Element showInfo={showInfo} num="61" />
            <Element showInfo={showInfo} num="62" />
            <Element showInfo={showInfo} num="63" />
            <Element showInfo={showInfo} num="64" />
            <Element showInfo={showInfo} num="65" />
            <Element showInfo={showInfo} num="66" />
            <Element showInfo={showInfo} num="67" />
            <Element showInfo={showInfo} num="68" />
            <Element showInfo={showInfo} num="69" />
            <Element showInfo={showInfo} num="70" />
            <Element showInfo={showInfo} num="71" />
            {/* Actionoids */}
            <Element showInfo={showInfo} num="90" />
            <Element showInfo={showInfo} num="91" />
            <Element showInfo={showInfo} num="92" />
            <Element showInfo={showInfo} num="93" />
            <Element showInfo={showInfo} num="94" />
            <Element showInfo={showInfo} num="95" />
            <Element showInfo={showInfo} num="96" />
            <Element showInfo={showInfo} num="97" />
            <Element showInfo={showInfo} num="98" />
            <Element showInfo={showInfo} num="99" />
            <Element showInfo={showInfo} num="100" />
            <Element showInfo={showInfo} num="101" />
            <Element showInfo={showInfo} num="102" />
            <Element showInfo={showInfo} num="103" />
        </div>
    );
}

export default PeriodicTable;