import React, { useState } from 'react';

import Dropdown from './Dropdown';
import { repeatEvery } from '../../DropDownOptions';

function RepeatEvery({ data }) {
    const [isPlural, setIsPlural] = useState(data.quantity > 1 ? "s" : "");

    return (
        <div style={{ display: 'flex' }}>
            <Dropdown chosen={data.quantity} options={repeatEvery.quantity} setIsPlural={setIsPlural} isNumber />
            <Dropdown chosen={data.time} options={repeatEvery.time} setIsPlural={setIsPlural} isPlural={isPlural} />
        </div>
    )
}

export default RepeatEvery;
