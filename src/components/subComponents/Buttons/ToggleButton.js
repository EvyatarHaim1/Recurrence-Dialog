import React, { useState, useEffect } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { useDispatch } from 'react-redux';

const ToggleBtn = ({ day, clicked, timeInfo }) => {
    const [selected, setSelected] = useState(clicked);
    const dispatch = useDispatch();

    return (
        <ToggleButton
            value={day}
            style={{ marginRight: '8px' }}
            selected={selected}
            onChange={() => {
                setSelected(!selected);
                dispatch({ type: 'REPEAT_ON_SELECT_DAY', payload: { day, selected } });
            }}
        >
            {day[0]}
        </ToggleButton >
    );
}
export default ToggleBtn;