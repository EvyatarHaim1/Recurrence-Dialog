import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import EventBlock from '../subComponents/EventBlock/EventBlock';
import { db } from "../../firebase";
import { fetchAllEvents } from '../../redux/event/event.action';

const Events = () => {
    const dispatch = useDispatch();
    const eventState = useSelector(state => state.event.event);
    const [savedEvents, setSavedEvents] = useState(null);

    const next = (snapshot) => {
        dispatch(fetchAllEvents(snapshot.docs[0].data()))
        setSavedEvents([
            {
                id: snapshot.docs[0].id,
                data: snapshot.docs[0].data()
            }
        ])
    }
    const error = (error) => {
        console.log(error.message);
    }

    useEffect(() => {
        db.collection('events')
            .orderBy('timestamp', 'desc')
            .onSnapshot({ error, next })
        if (savedEvents) {
            dispatch(fetchAllEvents(savedEvents[0].data));
        }
    }, []);

    const events = savedEvents?.map(e => <EventBlock id={e.id} key={e.id} data={e.data} />)

    return (
        <Container>
            {events}
        </Container>
    )
}

export default Events;

const Container = styled.div`
  width:100%;
  margin:auto;
`
