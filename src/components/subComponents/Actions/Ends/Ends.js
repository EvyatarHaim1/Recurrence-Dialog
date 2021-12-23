import React, { useState, useEffect } from 'react';
import Calendar from './Calendar';
import Dropdown from './Dropdown';
import { ends } from '../../DropDownOptions';


function Ends({ data, action }) {

    const renderContent = () => {
        switch (data.selected) {
            case "never":
                return <Dropdown chosen={data.selected} options={ends.options} action={action} />
            case "after":
                return (
                    <>
                        <Dropdown chosen={data.selected} options={ends.occurrences} action={action} />
                        <p>Occurrences</p>
                    </>
                )
            case "on":
                return (
                    <>
                        <Dropdown chosen={data.selected} options={ends.options} action={action} />
                        <Calendar isDate />
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
