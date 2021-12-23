import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import EventBlock from '../subComponents/EventBlock/EventBlock';
import { db } from "../../firebase";
import { defaultEvent } from '../../defaultEvent';

const Events = () => {
    const dispatch = useDispatch();
    const [savedEvents, setSavedEvents] = useState({});
    const updated = useSelector(state => state.events.events)

    useEffect(() => {
        db.collection('events')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
                setSavedEvents(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    })
                    ))
            )
        dispatch({ type: 'FETCH_ALL_EVENETS', payload: savedEvents });
    }, [savedEvents]);

    const events = Object.values(savedEvents);
    const allSavedEvents = events.map(e => <EventBlock id={e.id} key={e.id} data={e.data} />)

    return (
        <Container>
            <EventBlock id={defaultEvent.id} data={defaultEvent.data} newEvent />
            {allSavedEvents}
        </Container>
    )
}

export default Events;

const Container = styled.div`
  display: flex; 
  flex-wrap: wrap; 
  padding: 50px;
`
