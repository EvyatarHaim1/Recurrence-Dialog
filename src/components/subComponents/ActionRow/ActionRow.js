import React from 'react';
import styled from 'styled-components';
import Dropdown from '../Dropdown';

const ActionRow = ({ icon, action, values, params }) => {
    return (
        <Row>
            <Icon>{icon}</Icon>
            <div>{action}</div>
            <Dropdown values={values} />
            {/* <Dropdown params={params} /> */}
        </Row>
    )
}

export default ActionRow;

const Row = styled.div` 
display: flex;
`
const Icon = styled.div` 
margin-right: 17.23px;
`
