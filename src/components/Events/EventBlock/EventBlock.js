import React from 'react';
import styled from 'styled-components';
import { RefreshTwoTone, KeyboardTab, FlipCameraAndroid } from '@material-ui/icons';
import ActionRow from '../../subComponents/ActionRow/ActionRow';
import EventTitle from '../../subComponents/EventTitle';
import Buttons from '../../subComponents/Buttons/Buttons';
import { db } from "../../../firebase";

const EventBlock = ({ isTitle, id, key, data }) => {
    const title = data?.title || "Custom recurrence";

    const repeatEvery = {
        first: {
            values: [1, 2, 3, 4, 5],
            value: 1,
        },
        second: {
            values: ["day", "week", "month", "year"],
            value: "week",
        }
    }

    const repeatOn = {
        first: {
            values: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            value: "Monday",
        },
        second: {
            values: ["second Wednesday of the...", "14th day of the month", "second Sunday of the month"],
            value: "second Sunday of the month",
        },
    }

    const ends = {
        first: {
            values: ["never", "after", "on"],
            value: "never",
        },
        second: {
            values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            value: Date.now(),
        },
    }

    const saveEvent = () => {

    }

    const deleteEvent = () => {
        db.collection('events').doc(id).delete().then(() => {
        }).catch((error) => {
            console.error("Error removing event: ", error);
        });
    }

    return (
        <Container>
            <EventTitle title={title} />
            <ActionRow icon={<RefreshTwoTone />} action="Repeat every" data={repeatEvery} />
            <ActionRow icon={<FlipCameraAndroid />} action="Repeat on" data={repeatOn} />
            <ActionRow icon={<KeyboardTab />} action="Ends" data={ends} />
            <Buttons onSave={saveEvent} onDelete={deleteEvent} />
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