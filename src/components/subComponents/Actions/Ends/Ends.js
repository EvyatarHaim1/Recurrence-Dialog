import React, { useState } from 'react';
import { Typography } from '@material-ui/core';

import Calendar from './Calendar';
import Occurrences from './Occurrences';
import { ends } from '../../DropDownOptions';
import Dropdown from './Dropdown';

function Ends({ data }) {

    const [option, setOption] = useState(data.selected);
    const [isPlural, setIsPlural] = useState(data.occurrences > 1 ? "s" : "");

    const renderContent = () => {
        switch (option) {
            case "never":
                return <Dropdown chosen={data.selected} options={ends.options} action={"never"} setOption={setOption} />
            case "after":
                return (
                    <>
                        <Dropdown chosen={data.selected} options={ends.options} action={"after"} setOption={setOption} />
                        <Occurrences chosen={data.occurrences} options={ends.occurrences} setIsPlural={setIsPlural} />
                        <Typography>Occurrence{isPlural}</Typography>
                    </>
                )
            case "on":
                return (
                    <>
                        <Dropdown chosen={data.selected} options={ends.options} action={"on"} setOption={setOption} />
                        <Calendar date={new Date(data.date.seconds * 1000)} />
                    </>
                )
            default:
        }
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {renderContent()}
        </div>
    )
}

export default Ends;
