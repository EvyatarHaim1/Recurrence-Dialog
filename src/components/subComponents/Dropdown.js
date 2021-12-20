import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Calendar from '../subComponents/Calendar';

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

export default function Dropdown({ data, action }) {
    const classes = useStyles();
    const [dateOpen, setDateOpen] = useState(false);
    const [selected, setSelected] = useState(data.value);

    useEffect(() => {
        if (action === "Ends" && data.value === "on") { setDateOpen(true) };
    }, [action, data.value]);

    const handleChange = (event) => {
        setSelected(event.target.value);
    }

    let showDatePicker = dateOpen && (
        <Calendar isDate />);

    return (
        <div>
            {showDatePicker}
            <FormControl size="small" margin="dense" variant="outlined" className={classes.formControl}>
                <Select
                    className={classes.option}
                    native
                    value={selected}
                    onChange={handleChange}
                    inputProps={{
                        name: action,
                        id: 'outlined-age-native-simple',
                    }}
                >
                    {data.values?.map(item => (
                        <option className={classes.option} value={item} key={item} > {item}</option>
                    ))}
                </Select>
            </FormControl>
            {/* <Calendar /> */}
        </div >
    );
}
