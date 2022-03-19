import { Box, Grid, Paper } from '@mui/material';
import Alert from '@mui/material/Alert';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../styles/Styles';


const Message = (props) =>{
    const objectTransform = (data) =>{
        let str = '';
        const keys = Object.keys(data);
        const values = Object.values(data);
        for(let i = 0; i < keys.length; i++)
            str += keys[i] + ": " + values[i] + " "
        
        return str;
    }
    const msj = objectTransform(props.msj);
    return(
        <Paper className={props.classes}>
            <ThemeProvider theme={theme}>
                <Alert variant="filled" color="secondary">
                    { msj }
                </Alert>   
            </ThemeProvider>
        </Paper>
    );
}

export default Message;