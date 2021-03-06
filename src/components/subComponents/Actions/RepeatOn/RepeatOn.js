import React from 'react';

import ToggleBtn from '../../Buttons/ToggleButton';

function RepeatOn({ data }) {

    const days = data.map((day) => {
        const currentDay = day[Object.keys(day)[0]];
        return (
            <ToggleBtn key={Object.keys(day)[0]} day={Object.keys(day)[0]}
                clicked={currentDay.selected} timeInfo={currentDay.timeInfo} />
        )
    })

    return (
        <div style={{ display: "flex", marginLeft: "4px" }}>
            {days}
        </div>
    )
}

export default RepeatOn;
