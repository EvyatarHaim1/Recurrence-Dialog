import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    const [selected, setSelected] = useState(data.value);

    const handleChange = (event) => {
        setSelected(event.target.value);
    }


    return (
        <div>
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
                        <option className={classes.option} value={item} key={item}> {item}</option>
                    ))}
                </Select>
            </FormControl>
        </div >
    );
}
