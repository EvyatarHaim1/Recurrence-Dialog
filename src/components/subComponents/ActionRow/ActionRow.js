import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import styled from 'styled-components';

import RepeatEvery from '../Actions/RepeatEvery/RepeatEvery';
import RepeatOn from '../Actions/RepeatOn/RepeatOn';
import Ends from '../Actions/Ends/Ends';

const useStyles = makeStyles((theme) => ({
    text: {
        fontWeight: 500,
        color: "#2E3F50",
        justifyContent: "center"
    },
}));

const ActionRow = ({ icon, action, data }) => {
    const classes = useStyles();

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
                className={classes.text}
            >
                {action}
            </Typography>
            <Content>{renderContent()}</Content>
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
display: flex;
margin-right: 17.23px;
color:#2E3F50;
justify-content: center;
align-items: center;
`
const Content = styled.div`
`
