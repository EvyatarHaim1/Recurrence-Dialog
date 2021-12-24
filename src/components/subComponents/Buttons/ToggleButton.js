import React, { useState } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { useDispatch } from 'react-redux';

import { repeatOnSelectDay } from '../../../redux/event/event.action';
import { repeatOn } from '../DropDownOptions';

const ToggleBtn = ({ day, clicked }) => {
    const [selected, setSelected] = useState(clicked);
    const dispatch = useDispatch();

    return (
        <ToggleButton
            value={day}
            style={{ margin: "0 4px 0 4px" }}
            selected={selected}
            onChange={() => {
                setSelected(!selected);
                const index = repeatOn.day.indexOf(day);
                dispatch(repeatOnSelectDay({ index, day }));
            }}
        >
            {day[0]}
        </ToggleButton >
    );
}
export default ToggleBtn;