import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

const EventTitle = ({ title, id }) => {
    const dispatch = useDispatch();
    const [initialTitle, setTitle] = useState(title);
    //const update = useSelector(state => state.events.events)

    const handleChange = (e) => {
        e.persist();
        setTitle(e.target.value);
        dispatch({ type: 'CHANGE_TITLE', payload: { id, title: e.target.value } });
    }

    //console.log(update);


    return (
        <Title placeholder={initialTitle} value={initialTitle} onChange={handleChange} />
    )
}

export default EventTitle;

const Title = styled.input`
font-size: 22px;
font-weight: 500;
margin-bottom: 32px;
border:none;
color: #2E3F50;
`
