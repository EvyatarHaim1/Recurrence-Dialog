import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch } from 'react-redux';

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

export default function Dropdown({ options, chosen, action, setIsPlural }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(chosen);
    //dispatch({ type: 'UPDATE_DROPDOWN_VALUE', payload: { action, selected } });

    useEffect(() => {
        selected > 1 && setIsPlural(true);
    }, [selected, setIsPlural])

    return (
        <div>
            <FormControl size="small" margin="dense" variant="outlined" className={classes.formControl}>
                <Select
                    className={classes.option}
                    native
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                >
                    {options?.map(item => (
                        <option className={classes.option} value={item} key={item}> {item}</option>
                    ))}
                </Select>
            </FormControl>
        </div >
    );
}
