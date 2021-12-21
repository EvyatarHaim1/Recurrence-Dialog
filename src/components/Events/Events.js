import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import EventBlock from './EventBlock/EventBlock';
import { db } from "../../firebase";

const Events = () => {
    const dispatch = useDispatch();
    const newEvent = useSelector((state) => state.event.event);

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
    }, [savedEvents]);

    const defaultEvent = <EventBlock id={newEvent.id} data={newEvent} newEvent />

    const allEvents = savedEvents.map(e => <EventBlock id={e.id} key={e.id} data={e.data} />)


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
