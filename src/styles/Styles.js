import { makeStyles } from '@material-ui/core/styles';
import { createTheme  } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
    },
    paper: {
      maxWidth: 400,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    }
  }));

export const theme = createTheme ({
    palette: {
      primary: {
        main: '#ffffff',
      },
      secondary: {
        main: '#cb3de9',
      },
    },
  });