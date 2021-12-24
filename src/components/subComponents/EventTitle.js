import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { changeTitle } from '../../redux/event/event.action';

const EventTitle = ({ title }) => {
    const dispatch = useDispatch();
    const [initialTitle, setInitialTitle] = useState(title);

    const handleChange = (e) => {
        e.persist();
        setInitialTitle(e.target.value);
        dispatch(changeTitle(e.target.value));
    }

    return (
        <Title placeholder={initialTitle} value={initialTitle} onChange={handleChange} />
    )
}

export default EventTitle;

const Title = styled.input`
font-size: 22px;
font-weight: 500;
margin-bottom: 28px;
border:none;
color: #2E3F50;
`
