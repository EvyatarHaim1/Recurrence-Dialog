import React from 'react';
import styled from 'styled-components';
import Dropdown from '../Dropdown';

const ActionRow = ({ icon, action, data }) => {
    return (
        <Row>
            <Icon>{icon}</Icon>
            <div>{action}</div>
            <Dropdown data={data.first} action={action} />
            <Dropdown data={data.second} action={action} />
        </Row>
    )
}

export default ActionRow;

const Row = styled.div` 
display: flex;
justify-content: center;
align-items: center;
`
const Icon = styled.div` 
margin-right: 17.23px;
`
