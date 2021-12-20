import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

}));


const CustomButton = ({ title, onClick, type }) => {
    // const classes = useStyles();

    return (
        <Button
            // classes={{ color: classes.color }} 
            onClick={onClick} color="primary" type={type}>{title}</Button>
    )
}

export default CustomButton;
