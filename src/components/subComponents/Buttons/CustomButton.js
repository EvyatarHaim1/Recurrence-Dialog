import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    color: {
        color: "#2E3F50"
    },
}));


const CustomButton = ({ title, onClick }) => {
    const classes = useStyles();

    return (
        <Button classes={{ color: classes.color }} onClick={onClick}>{title}</Button>
    )
}

export default CustomButton;
