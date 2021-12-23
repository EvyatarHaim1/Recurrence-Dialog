import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch } from 'react-redux';
import { endsSelected } from '../../../../redux/event/event.action';

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

export default function Dropdown({ options, chosen, setOption }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(options.findIndex((str) => str.split(" ")[0] === chosen));

    const handleChange = (e) => {
        setOption(options[e.target.value].split(" ")[0])
        setSelected(e.target.value);
        dispatch(endsSelected(options[e.target.value].split(" ")[0]));
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
                    {options?.map((item, i) => (
                        <option className={classes.option} value={i} key={item}> {item.split(" ")[0]}</option>
                    ))}
                </Select>
            </FormControl>
        </div >
    );
}
