import React from 'react';
import ToggleBtn from '../../Buttons/ToggleButton';

function RepeatOn({ data, action }) {

    const days = data.map((day) => (
        <ToggleBtn key={Object.keys(day)[0]} day={Object.keys(day)[0]} clicked={day.selected} timeInfo={day.timeInfo} />))

    return (
        <div style={{ display: "flex" }}>
            {days}
        </div>
    )
}

export default RepeatOn;
