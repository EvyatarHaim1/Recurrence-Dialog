import React, { useState } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';

const ToggleButton = () => {
    const [selected, setSelected] = useState(false);

    return (
        <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
                setSelected(!selected);
            }}
        >
            <CheckIcon />
        </ToggleButton>
    );
}
export default ToggleButton;