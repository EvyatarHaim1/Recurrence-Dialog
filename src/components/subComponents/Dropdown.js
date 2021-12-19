import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Calendar from '../subComponents/Calendar';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
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
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">{selected}</InputLabel>
                <Select
                    native
                    value={selected}
                    onChange={handleChange}
                    label="selected"
                    inputProps={{
                        name: action,
                        id: 'outlined-age-native-simple',
                    }}
                >
                    {data.values?.map(item => (
                        <option value={item} key={item}>{item}</option>
                    ))}
                </Select>
            </FormControl>
            <Calendar />
        </div>
    );
}
