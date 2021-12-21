import React from 'react';
import styled from 'styled-components';
import { RefreshTwoTone, KeyboardTab, FlipCameraAndroid } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import firebase from 'firebase';

import { repeatEvery, repeatOn, ends } from '../../subComponents/DropDownOptions';
import ActionRow from '../../subComponents/ActionRow/ActionRow';
import EventTitle from '../../subComponents/EventTitle';
import Buttons from '../../subComponents/Buttons/Buttons';
import { db } from "../../../firebase";

const EventBlock = ({ newEvent, id, data }) => {
    const eventToSave = useSelector((state) => state.event.event);

    const saveEvent = () => {
        db.collection('events').add({
            title: eventToSave.title,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            repeatEvery: {
                first: eventToSave.repeatEvery.first,
                second: eventToSave.repeatEvery.second,
            },
            repeatOn: {
                Monday: {
                    selected: eventToSave.repeatOn.Monday.selected,
                    timeInfo: eventToSave.repeatOn.Monday.timeInfo
                },
                Tuesday: {
                    selected: eventToSave.repeatOn.Tuesday.selected,
                    timeInfo: eventToSave.repeatOn.Tuesday.timeInfo
                },
                Wednesday: {
                    selected: eventToSave.repeatOn.Wednesday.selected,
                    timeInfo: eventToSave.repeatOn.Wednesday.timeInfo
                },
                Thursday: {
                    selected: eventToSave.repeatOn.Thursday.selected,
                    timeInfo: eventToSave.repeatOn.Thursday.timeInfo
                },
                Friday: {
                    selected: eventToSave.repeatOn.Friday.selected,
                    timeInfo: eventToSave.repeatOn.Friday.timeInfo
                },
                Saturday: {
                    selected: eventToSave.repeatOn.Saturday.selected,
                    timeInfo: eventToSave.repeatOn.Saturday.timeInfo
                },
                Sunday: {
                    selected: eventToSave.repeatOn.Sunday.selected,
                    timeInfo: eventToSave.repeatOn.Sunday.timeInfo
                },
            },
            ends: {
                never: {
                    selected: eventToSave.ends.never.selected,
                },
                after: {
                    selected: eventToSave.ends.after.selected,
                    occurrences: eventToSave.ends.after.occurrences
                },
                on: {
                    selected: eventToSave.ends.on.selected,
                    date: eventToSave.ends.on.date,
                }
            }
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
            <EventTitle title={data.title} />
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