import React from 'react';
import styled from 'styled-components';
import CustomButton from './CustomButton';

const Buttons = ({ onSave, onDelete }) => {

    return (
        <Container>
            <CustomButton title="Cancel" onClick={onDelete} />
            <CustomButton type="submit" title="Done" onClick={onSave} />
        </Container>
    )
}

export default Buttons;

const Container = styled.div`
display: flex;
justify-content: flex-end;
`
