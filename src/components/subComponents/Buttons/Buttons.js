import React from 'react';
import styled from 'styled-components';
import CustomButton from './CustomButton';

const Buttons = ({ onSave, onDelete }) => {

    const deleteEvent = () => { onDelete() }

    return (
        <Container>
            <CustomButton variant="primary" type="submit" title="Cancle" onClick={onSave} />
            <CustomButton variant="secondary" title="Done" onClick={deleteEvent} />
        </Container>
    )
}

export default Buttons;

const Container = styled.div`
display: flex;
justify-content: flex-end;
`
