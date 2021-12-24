import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch } from 'react-redux';
import { repeatEveryQuantity, repeatEveryTime } from '../../../../redux/event/event.action';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 40,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    option: {
        color: "#566B80"
    },
}));

export default function Dropdown({ options, chosen, isNumber, isPlural, setIsPlural }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(chosen);

    const handleChange = (e) => {
        if (isNumber) {
            dispatch(repeatEveryQuantity(e.target.value))
            if (e.target.value > 1) {
                setIsPlural("s")
            } else {
                setIsPlural("")
            }
        } else {
            dispatch(repeatEveryTime(e.target.value))
        }
        setSelected(e.target.value);
    }


    return (
        <div>
            <FormControl size="small" margin="dense" variant="outlined" className={classes.formControl}>
                <Select
                    className={classes.option}
                    native
                    value={selected}
                    onChange={handleChange}
                >
                    {options?.map(item => (
                        <option className={classes.option} value={item} key={item}> {item}{isPlural}</option>
                    ))}
                </Select>
            </FormControl>
        </div >
    );
}
