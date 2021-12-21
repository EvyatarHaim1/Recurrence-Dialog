import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const EventTitle = ({ title }) => {
    const dispatch = useDispatch();
    const [initialTitle, setTitle] = useState(title);

    const handleChange = (e) => {
        e.persist();
        setTitle(e.target.value);
        const updateTitle = dispatch({ type: 'CHANGE_TITLE', payload: e.target.value });
        console.log(updateTitle);
    }

    useEffect(() => {
        console.log(initialTitle);
    }, [initialTitle]);

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
