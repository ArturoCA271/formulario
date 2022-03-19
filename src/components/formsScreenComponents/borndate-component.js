import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

import { useStyles } from '../../styles/Styles';
import Message from './message';

const zeros = (number, width) => {
    let length = number.length;
    let zero = "0";
    return (zero.repeat(width - length) + number);
}

const formatedDate = (fecha, formato) => {
    let day= fecha.toLocaleString("en-US", {day: 'numeric'});
    let month= fecha.toLocaleString("en-US", {month: 'numeric'});
    let year= fecha.toLocaleString("en-US", {year: 'numeric'});
    const map = {
        dd: zeros(day, 2),
        mm: zeros(month, 2),
        yy: fecha.getFullYear().toString().slice(-2),
        yyyy: year
    }
    
    return formato.replace(/dd|mm|yyyy/gi, matched => map[matched])
}


const BorndateScreen = (props) =>{
    const classes = useStyles();
    const dataform2 = {
        borndate: formatedDate(props.data.borndate, 'dd-mm-yyyy'),
    };

    return(
      <div>
          <Paper className={classes.paper}>
            <Grid container component="main">
            <Box>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                        <DatePicker
                        views={['day']}
                        label="dia"
                        name="borndate"
                        value = {props.borndateValue}
                        onChange={(value) =>props.onChangeFunc({target: {value:value, name:"borndate"}})}
                        renderInput={(params) => <TextField {...params} />}
                        />
                        <DatePicker
                        views={['month']}
                        label="Mes"
                        name="borndate"
                        value = {props.borndateValue}
                        onChange={(value) =>props.onChangeFunc({target: {value:value, name:"borndate"}})}
                        renderInput={(params) => <TextField {...params} />}
                        />

                        <DatePicker
                        views={['year']}
                        label="Año"
                        name="borndate"
                        value = {props.borndateValue}
                        onChange={(value) =>props.onChangeFunc({target: {value:value, name:"borndate"}})}
                        renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>    
                    
                </LocalizationProvider>

            </Box>
            </Grid>
          </Paper>
          <Message msj={dataform2} classes={classes.paper}/>
      </div>  
    );
}

export default BorndateScreen;