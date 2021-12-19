import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'
import EventBlock from './EventBlock/EventBlock';
import { db } from "../../firebase";

const Events = () => {
    const dispatch = useDispatch();
    const [savedEvents, setSavedEvents,] = useState([]);

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
    }, [dispatch, savedEvents]);

    const allEvents = savedEvents.map(e => <EventBlock key={e.id} isTitle={e.data.title} />)

    const defaultEvent = <EventBlock isTitle="Custom recurrence" />

    return (
        <Container>
            {defaultEvent}
            {allEvents}
        </Container>
    )
}

export default Events;

const Container = styled.div`
  display: flex; 
  flex-wrap: wrap; 
  padding: 50px;
`
