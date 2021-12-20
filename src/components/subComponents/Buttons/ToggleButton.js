import React, { useState } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';

const ToggleBtn = ({ day }) => {
    const [selected, setSelected] = useState(false);

    return (
        <ToggleButton
            value={day}
            selected={selected}
            onChange={() => {
                setSelected(!selected);
            }}
        >
            {day[0]}
        </ToggleButton>
    );
}
export default ToggleBtn;