import React from 'react';
import styled from 'styled-components';
import { RefreshTwoTone, KeyboardTab, FlipCameraAndroid } from '@material-ui/icons';
import ActionRow from '../../subComponents/ActionRow/ActionRow';
import EventTitle from '../../subComponents/EventTitle';
import Buttons from '../../subComponents/Buttons/Buttons';

const EventBlock = ({ isTitle, values, params }) => {
    const title = isTitle || "Custom recurrence";

    const firstAction = {
        values: [1, 2, 3, 4, 5],
        params: ["day", "week", "month", "year"],
    }

    const secondAction = {
        values: [1, 2, 3, 4, 5],
        params: ["day", "week", "month", "year"],
    }

    const thirdAction = {
        values: ["never", "after", "on"],
        params: ["day", "week", "month", "year"],
    }

    return (
        <Container>
            <EventTitle title={title} />
            <ActionRow icon={<RefreshTwoTone />} action="Repeat every" values={firstAction.values} params={firstAction.params} />
            <ActionRow icon={<FlipCameraAndroid />} action="Repeat on" values={secondAction.values} params={secondAction.params} />
            <ActionRow icon={<KeyboardTab />} action="Ends" values={thirdAction.values} params={thirdAction.params} />
            <Buttons />
        </Container>
    )
}

export default EventBlock;

const Container = styled.div`
display: flex; 
flex-direction: column;
width:441px;
height:312px;
background:#ffffff;
border-radius: 4px;
margin:20px;
padding:24px;
`