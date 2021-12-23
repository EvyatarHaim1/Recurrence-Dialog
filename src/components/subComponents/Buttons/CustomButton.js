import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { defaultEvent } from '../../../defaultEvent';

const useStyles = makeStyles((theme) => ({
    btn: {
        fontFamily: 'Poppins !important',
        fontsize: "12 !important",
    },
    disable: {
    },
    primarybtn: {
        backgroundColor: "#2E3F50",
        color: "#FFFFFF",
        '&:hover': {
            backgroundColor: "#2E3F70",
        },
    },
    secondarybtn: {
        border: "1px solid #2E3F50",
        color: "#2E3F50",
        marginRight: theme.spacing(1),
    },
}));


const CustomButton = ({ title, onClick, type }) => {
    const classes = useStyles();
    const defaultTitle = defaultEvent.title;

    return (
        <Button
            className={[classes.btn, type ? classes.primarybtn : classes.secondarybtn].join(" ")}
            onClick={onClick}
            variant="outlined"
            size="medium"
            disabled={false}
            type={type}>
            {title}
        </Button>
    )
}

export default CustomButton;
