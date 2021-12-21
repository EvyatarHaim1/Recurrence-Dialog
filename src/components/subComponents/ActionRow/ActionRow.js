import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import Dropdown from '../Dropdown';
import ToggleBtn from '../Buttons/ToggleButton';
import Calendar from '../Calendar';

const ActionRow = ({ icon, action, data }) => {

    const areDays = action === "Repeat on" && data.first.values.map((day) => <ToggleBtn key={day} day={day} />)

    const renderContent = () => {
        if (action === "Repeat every") {
            return (
                <>
                    <Dropdown data={data.first} action={action} />
                    {<Dropdown data={data.second} action={action} />}
                </>
            )
        }
        else if (action === "Repeat on") {
            return areDays
        }
        else {
            if (data.first.value === "never") return <Dropdown data={data.first} action={action} />
            else if (data.first.value === "after") {
                return (
                    <>
                        <Dropdown data={data.first} action={action} />
                        <p>Occurrences</p>
                    </>
                )
            } else {
                return (
                    <>
                        <Dropdown data={data.first} action={action} />
                        <Calendar isDate />
                    </>
                )
            }
        }
    }

    return (
        <Row>
            <Icon>{icon}</Icon>
            <Typography
                variant="body1"
                style={{ fontWeight: 500, overflow: "hidden", whiteSpace: "nowrap", marginRight: "8px" }}>
                {action}
            </Typography>
            {renderContent()}
        </Row>
    )
}

export default ActionRow;

const Row = styled.div` 
display: flex;
justify-content: flex-start;
align-items: center;
margin-bottom:16px; 
`
const Icon = styled.div` 
margin-right: 17.23px;
`
