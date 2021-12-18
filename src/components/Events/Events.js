import React from 'react';
import styled from 'styled-components';
import EventBlock from './EventBlock/EventBlock';

const Events = () => {

    const savedEvents = true;

    const showEvents = savedEvents ? (
        <>
            <EventBlock isTitle="doing workout" />
            <EventBlock isTitle="watching movie with my gf" />
            <EventBlock isTitle="playing guitar" />
            <EventBlock isTitle="showing the app to Tal" />
            <EventBlock />
        </>
    ) : <EventBlock isTitle="doing workout" />
    return (
        <Container>
            {showEvents}
        </Container>
    )
}

export default Events;

const Container = styled.div`
  display: flex; 
  flex-wrap: wrap; 
  padding: 50px;
`
