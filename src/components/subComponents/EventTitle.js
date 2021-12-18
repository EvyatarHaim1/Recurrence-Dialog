import React from 'react';
import styled from 'styled-components';

const EventTitle = ({ title }) => {
    return (
        <Title>
            {title}
        </Title>
    )
}

export default EventTitle;

const Title = styled.h3`
font-size: 22px;
font-weight: 500;
margin-bottom: 32px;
color: #2E3F50;
`
