import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "40px",
        padding: "0 20px 0 20px",
        fontSize: "12px",
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

    return (
        <Button
            className={[classes.root, type ? classes.primarybtn : classes.secondarybtn].join(" ")}
            onClick={onClick}
            variant="outlined"
            size="small"
            type={type}>
            {title}
        </Button>
    )
}

export default CustomButton;
