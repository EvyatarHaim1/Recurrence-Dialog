import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import { repeatEvery } from '../../DropDownOptions';

function RepeatEvery({ data, action }) {
    const [isPlural, setIsPlural] = useState(false);

    return (
        <div style={{ display: 'flex' }}>
            <Dropdown chosen={data.quantity} options={repeatEvery.quantity} setIsPlural={setIsPlural} action={action} />
            {<Dropdown chosen={data.time} options={repeatEvery.time} action={action} />}
        </div>
    )
}

export default RepeatEvery;
