import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './components/navbar.js'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import './App.css';
import theme from './theme';
import {makeStyles} from '@material-ui/core/styles'
import GlobalStyles from './globalStyles';
import Header from './components/header'
import About from './components/about'

const useStyles = makeStyles(({
}));


function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <GlobalStyles/>
      <Navbar/>
      <Header/>
      <About/>
    </ThemeProvider>
  );
}

export default App;
