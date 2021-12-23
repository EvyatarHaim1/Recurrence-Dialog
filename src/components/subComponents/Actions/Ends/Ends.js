import React, { useState, useEffect } from 'react';
import Calendar from './Calendar';
import Occurrences from './Occurrences';
import { ends } from '../../DropDownOptions';
import Dropdown from './Dropdown';

function Ends({ data, action }) {

    const [option, setOption] = useState(data.selected);

    const renderContent = () => {
        switch (option) {
            case "never":
                return <Dropdown chosen={data.selected} options={ends.options} action={"never"} setOption={setOption} />
            case "after":
                return (
                    <>
                        <Dropdown chosen={data.selected} options={ends.options} action={"after"} setOption={setOption} />
                        <Occurrences chosen={data.occurrences} options={ends.occurrences} action={action} />
                        <p>Occurrences</p>
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
