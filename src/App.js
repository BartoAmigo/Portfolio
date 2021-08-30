import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Navbar from './components/navbar.js'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import './App.css';
import theme from './theme';
import {makeStyles} from '@material-ui/core/styles'
import GlobalStyles from './globalStyles';
import trees from './images/oregontree.jpg'
import profilePicture from './images/profileimg.jfif'
import octupusTree from './images/octopustree.jpg'
import skatepark from './images/skateparkinForest.jpg'

const useStyles = makeStyles({
  root:{
  },
  bgimg:{
    position:"relative",
    backgroundImage:`url(${trees})`,
    height:"100vh",
    overflow:"hidden",
    scrollBehavior:"none",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    filter:" blur(3px) brightness(30%) ",
    backgroundAttachment:"fixed",
    transform:"translateZ(3px)",
  },
  profileImg:{
    display:"block",
    marginTop:"50px",
    marginBottom:"50px",
    marginLeft:"auto",
    marginRight:"auto",
    width:"25vw",
    height:"auto",
    filter:"brightness(60%)",
    borderRadius:("50%"),
  },
  welcomeText:{
    position:"relative",
    fontSize:"2em",
    color:"green",
    fontFamily:"monospace",
  },
  paper:{
    marginLeft:"auto",
    marginRight:"auto",
    width:"60%",
    padding:"10px",
    marginTop:"30%",
    position:"relative",
    backgroundColor:"rgb(0,0,0,0.5)",
    color:"green",
    '& >*':{
      fontFamily:"monospace",
    }
  },
  header:{
    marginTop:"15%",
    position:"relative",
    display:"block",
  },
  secondImage:{
    position:"relative",
    backgroundImage:`url(${octupusTree})`,
    height:"100vh",
    overflow:"hidden",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    filter:"blur(3px) brightness(30%)",
    backgroundAttachment:"fixed",
    transform:"translateZ(3px)",
  },
  parallaxContainer:{
    scrollBehavior:"none",
    width:"100%",
    height:"100vh",
    position:"relative",
    transform:"translateZ(0px)",
    backgroundColor:"rgb(0,0,0,1.0)",
  },
  parallaxItem:{
    position:"absolute",
    top:"10%",
    color:"white",
  },
  thirdImage:{
    position:"relative",
    backgroundImage:`url(${skatepark})`,
    height:"100vh",
    overflow:"hidden",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    filter:"blur(3px) brightness(30%)",
    backgroundAttachment:"fixed",
    transform:"translateZ(3px)",
  },


});


function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <GlobalStyles/>
      <Navbar/>
      <Toolbar style={{marginTop:"-10px"}}/>
      
      
      <Grid id="About"className={classes.parallaxContainer}>
        <Grid item className={classes.secondImage}></Grid>
        <Grid item className={classes.parallaxItem}>Hi</Grid>
      </Grid>
      <Grid id="Projects"className={classes.parallaxContainer}>
        <Grid item className={classes.bgimg}/>
        <Grid item className={classes.parallaxItem}>
          ODFJDFDJOJOD</Grid>
      </Grid>
      <Grid id="Contact"className={classes.parallaxContainer}>
        <Grid item className={classes.thirdImage}></Grid>
        <Grid item className={classes.parallaxItem}>Hi Kalub</Grid>
      </Grid>
      

      {/*
      <Grid container className={classes.bgimg}/>
      <img alt="ProifleImage" className={classes.profileImg} src={profilePicture}></img><br></br>
      <Typography align="center" className={classes.welcomeText}>Welcome</Typography>
      <div className={classes.header}id="About"></div>
      <Grid container className={classes.secondImage}/>
      <Paper className={classes.paper} elevation={8}>
        <Typography align="center" variant="h5">About Me</Typography>
        <Typography>I enjoy computers and computer programming.
          I hacked my very first PSP when I was twelve, and since then I have had an interest in electronics. I discovered my interest in software
          when I first installed Linux on a crappy laptop. None of the hardware worked on the laptop with Linux installed, so I had to tinker with the software
          to get all the hardware working. 
          I recently just graduated from Cal State San Marcos and have a degree in Computer Information Systems. I am super excited 
          to pursue a career in the Computer Science field. 
        </Typography>
      </Paper>
      <div id="Projects" className={classes.header}></div>
      <Paper className={classes.paper}>
        <Typography align="center" variant="h5">Projects</Typography>
        <Grid container>

        </Grid>
      </Paper>
      */}

    </ThemeProvider>
  );
}

export default App;
