import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import { repeatEvery } from '../../DropDownOptions';

function RepeatEvery({ data, action }) {
    const [isPlural, setIsPlural] = useState(data.quantity > 1 ? "s" : "");

    return (
        <div style={{ display: 'flex' }}>
            <Dropdown chosen={data.quantity} options={repeatEvery.quantity} setIsPlural={setIsPlural} isNumber />
            <Dropdown chosen={data.time} options={repeatEvery.time} setIsPlural={setIsPlural} isPlural={isPlural} />
        </div>
    )
}

export default RepeatEvery;
