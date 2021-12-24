import React from 'react';
import styled from 'styled-components';

import CustomButton from './CustomButton';

const Buttons = ({ onSave, onCancel }) => {

    return (
        <Container>
            <CustomButton title="Cancel" onClick={onCancel} />
            <CustomButton type="submit" title="Done" onClick={onSave} />
        </Container>
    )
}

export default Buttons;

const Container = styled.div`
display: flex;
justify-content: flex-end;
`
