import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const EventTitle = ({ title }) => {
    const dispatch = useDispatch();
    const [initialTitle, setTitle] = useState(title);

    const handleChange = (e) => {
        setTitle(e.target.value);
        const updated = dispatch({ type: 'CHANGE_TITLE', payload: initialTitle });
        console.log(updated)
    }

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
