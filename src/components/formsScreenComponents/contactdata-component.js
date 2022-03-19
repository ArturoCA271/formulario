import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import { useStyles } from '../../styles/Styles';
import Message from './message';

const ContactScreen = (props) =>{ 
    const classes = useStyles();
    const dataform3 = {
      email: props.data.email,
      cellphone:props.data.cellphone,
    };

    return(
      <div>
          <Paper className={classes.paper}>
            <Grid container component="main">
                <Box>
                  <TextField
                  margin="normal"
                  fullWidth
                  required
                  type="email"
                  label="Email"
                  name="email"
                  variant="outlined"
                  onChange={(value) => props.onChangeFunc(value)}
                  >
                  </TextField>

                  <TextField
                  margin="normal"
                  fullWidth
                  required
                  label="Celular"
                  type="number"
                  name="cellphone"
                  variant="outlined"
                  onChange={(value) => props.onChangeFunc(value)}
                  >
                  </TextField>
                </Box>
            </Grid>
          </Paper>
          <Message msj={dataform3} classes={classes.paper}/>
      </div>  
    );
}

export default ContactScreen;