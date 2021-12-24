import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch } from 'react-redux';
import { endsOccurences } from '../../../../redux/event/event.action';

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

export default function Dropdown({ options, chosen, setIsPlural }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(chosen);

    const handleChange = (e) => {
        dispatch(endsOccurences(e.target.value));
        if (e.target.value > 1) {
            setIsPlural("s")
        } else {
            setIsPlural("")
        }
        setSelected(e.target.value);
    }

    return (
        <div>
            <FormControl size="small" margin="dense" variant="outlined" className={classes.formControl}>
                <Select
                    className={classes.option}
                    style={{ minWidth: "70px", height: "44px" }}
                    native
                    value={selected}
                    onChange={handleChange}
                >
                    {options?.map(item => (
                        <option className={classes.option} value={item} key={item}> {item}</option>
                    ))}
                </Select>
            </FormControl>
        </div >
    );
}
