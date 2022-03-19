import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import { useStyles } from '../../styles/Styles';
import Alert from '@mui/material/Alert';
import Message from './message';

const NameSreen = (props) =>{ 
    const classes = useStyles();
    const dataform1 = {
        name: props.data.name,
        second_name:props.data.second_name,
        fathers_lastname: props.data.fathers_lastname,
        mothers_lastname: props.data.mothers_lastname
    };
    return(  
        <div>  
            <Paper className={classes.paper}>
                <Grid container component="main">
                    <Box >
                        <TextField
                        margin="normal"
                        fullWidth
                        required
                        label="Nombre"
                        name="name"
                        variant="outlined"
                        onChange={(value) =>props.onChangeFunc(value)}
                        >
                        </TextField>
                        <TextField
                        margin="normal"
                        fullWidth
                        label="Segundo nombre"
                        name="second_name"
                        variant="outlined"
                        onChange={(value) =>props.onChangeFunc(value)}
                        >
                        </TextField>
                        <TextField
                        margin="normal"
                        fullWidth
                        required
                        label="Apellido paterno"
                        name="fathers_lastname"
                        variant="outlined"
                        onChange={(value) =>props.onChangeFunc(value)}
                        >
                        </TextField>
                        <TextField
                        margin="normal"
                        fullWidth
                        required
                        label="Apellido materno"
                        name="mothers_lastname"
                        variant="outlined"
                        onChange={(value) =>props.onChangeFunc(value)}
                        >
                        </TextField>                     
                    </Box>
                </Grid>
            </Paper>
            <Message msj={dataform1} classes={classes.paper}/>
        </div>
    );
}

export default NameSreen;