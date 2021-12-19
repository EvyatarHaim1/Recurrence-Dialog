import React from 'react';
import styled from 'styled-components';
import CustomButton from './CustomButton';

const Buttons = () => {

    const close = () => {

    }

    const done = () => {

    }

    return (
        <Container>
            <CustomButton variant="primary" title="Cancle" onClick={close} />
            <CustomButton variant="secondary" title="Done" onClick={done} />
        </Container>
    )
}

export default Buttons;

const Container = styled.div`
display: flex;
justify-content: flex-end;
`
