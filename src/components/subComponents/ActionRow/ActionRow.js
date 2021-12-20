import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import Dropdown from '../Dropdown';
import ToggleBtn from '../Buttons/ToggleButton';

const ActionRow = ({ icon, action, data }) => {
    return (
        <Row>
            <Icon>{icon}</Icon>
            <Typography
                variant="body1"
                style={{
                    fontWeight: 500,
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    marginRight: "8px",
                }}>
                {action}
            </Typography>
            {action === "Repeat on" ? data.first.values.map((day) => <ToggleBtn day={day} />
            ) : (
                <>
                    <Dropdown data={data.first} action={action} />
                    <Dropdown data={data.second} action={action} />
                </>
            )}
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
