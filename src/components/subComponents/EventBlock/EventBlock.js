import React from 'react';
import styled from 'styled-components';
import { RefreshTwoTone, KeyboardTab, FlipCameraAndroid } from '@material-ui/icons';
import firebase from 'firebase';
import { useSelector } from 'react-redux';

import ActionRow from '../ActionRow/ActionRow';
import EventTitle from '../EventTitle';
import Buttons from '../Buttons/Buttons';
import { db } from "../../../firebase";
import { defaultEvent } from '../../../defaultEvent';

const EventBlock = ({ id, data }) => {
    const currentEvent = useSelector(state => state.event.event);

    const saveEvent = () => {
        db.collection('events').doc(id).set({
            title: currentEvent.title,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            repeatEvery: currentEvent.repeatEvery,
            repeatOn: currentEvent.repeatOn,
            ends: currentEvent.ends,
        }, { merge: true });
    }

    const setEvent = () => {
        db.collection('events').doc(id).set({
            title: defaultEvent.title,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            repeatEvery: defaultEvent.repeatEvery,
            repeatOn: defaultEvent.repeatOn,
            ends: defaultEvent.ends,
        }, { merge: true });
        window.location.reload();
    }

    return (
        <Container>
            <EventTitle title={data.title} />
            <ActionRow icon={<RefreshTwoTone />} action="Repeat every" data={data.repeatEvery} />
            <ActionRow icon={<FlipCameraAndroid />} action="Repeat on" data={data.repeatOn} />
            <ActionRow icon={<KeyboardTab />} action="Ends" data={data.ends} />
            <Buttons onSave={saveEvent} onCancel={setEvent} />
        </Container>
    )
}

export default EventBlock;

const Container = styled.div`
display: flex; 
flex-direction: column;
width:417px;
height:288px;
background:#ffffff;
border-radius: 4px;
padding:24px;
margin:10% auto;
`