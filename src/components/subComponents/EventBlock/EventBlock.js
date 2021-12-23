import React, { useEffect } from 'react';
import styled from 'styled-components';
import { RefreshTwoTone, KeyboardTab, FlipCameraAndroid } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import firebase from 'firebase';

import ActionRow from '../ActionRow/ActionRow';
import EventTitle from '../EventTitle';
import Buttons from '../Buttons/Buttons';
import { db } from "../../../firebase";

const EventBlock = ({ newEvent, id, data }) => {
    const eventToSave = useSelector((state) => state.events.events);

    const saveEvent = () => {
        db.collection('events').add({
            title: eventToSave.title,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            repeatEvery: eventToSave.repeatEvery,
            repeatOn: eventToSave.repeatOn,
            ends: eventToSave.ends,
        });
    }

    const deleteEvent = () => {
        db.collection('events').doc(id).delete().then(() => {
        }).catch((error) => {
            console.error("Error removing event: ", error);
        });
    }

    return (
        <Container>
            <EventTitle title={data.title} id={id} />
            <ActionRow icon={<RefreshTwoTone />} action="Repeat every" data={data.repeatEvery} />
            <ActionRow icon={<FlipCameraAndroid />} action="Repeat on" data={data.repeatOn} />
            <ActionRow icon={<KeyboardTab />} action="Ends" data={data.ends} />
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