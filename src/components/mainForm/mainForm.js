import { Box, Button, Paper } from '@mui/material';
import { useState } from 'react';
import NameSreen from '../formsScreenComponents/name-component';
import BorndateScreen from '../formsScreenComponents/borndate-component';
import ContactScreen from '../formsScreenComponents/contactdata-component';
import { useStyles, theme } from '../../styles/Styles';
import { ThemeProvider } from '@mui/material/styles';


import Message from '../formsScreenComponents/message';
import UserDataService from '../../services/data.services';
import { insert_data_in_localstorage } from '../../helpers/localstorage';

const MainForm = () =>{
    const classes = useStyles();
    const [isSent, setUpdate] = useState(false);
    const [data, setData] = useState({
      name: '',
      second_name: '',
      fathers_lastname: '',
      mothers_lastname: '',
      borndate: new Date(),
      email: '',
      cellphone: ''
    });
    
    const handleInputChange = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        setData({
            ...data,
            [name]: value
        });
        
    }
    const handleSubmit = async (event) =>{
        event.preventDefault();
        setUpdate(true);
        console.log('Se envio con exito');
        await UserDataService.insertUser('/newUser', data);
        insert_data_in_localstorage(data);
    }
    return(
        <div className={classes.root}>
            <Message msj={{0:"Formulario"}} classes={classes.paper}/>
            <Box component="form" onSubmit={handleSubmit}>
                <NameSreen data={data} onChangeFunc={handleInputChange}/>
                <BorndateScreen data={data} onChangeFunc={handleInputChange} borndateValue={data.borndate}/>
                <ContactScreen data={data} onChangeFunc={handleInputChange} />                
                <Paper className={classes.paper}>
                    <ThemeProvider theme={theme}>
                        <Button
                        color="secondary"
                        type="submit"            
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        >
                            Iniciar
                        </Button>
                    </ThemeProvider>
                </Paper>
                
            </Box>
            {isSent ?(<Message msj={data} classes={classes.paper}/>) :(console.log(''))}
            
        </div>
    );
}

export default MainForm;


