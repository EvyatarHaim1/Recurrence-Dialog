import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import RepeatEvery from '../Actions/RepeatEvery/RepeatEvery';
import RepeatOn from '../Actions/RepeatOn/RepeatOn';
import Ends from '../Actions/Ends/Ends';

const ActionRow = ({ icon, action, data }) => {

    const renderContent = () => {
        switch (action) {
            case "Repeat every":
                return <RepeatEvery data={data} />
            case "Repeat on":
                return <RepeatOn data={data} />
            default:
                return <Ends data={data} />
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
