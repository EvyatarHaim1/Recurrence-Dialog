import React, { useState } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';

const ToggleButton = ({ day }) => {
    const [selected, setSelected] = useState(false);

    return (
        <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
                setSelected(!selected);
            }}
        >
            {day}
        </ToggleButton>
    );
}
export default ToggleButton;