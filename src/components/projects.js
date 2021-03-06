
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography' 
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub'
import ProjectItem from './projectitem'
import GridPhoto from '../images/AngularGrid.png'
import autoClicker from '../images/autoClicker.png' 
import tictactoe from '../images/ticTacToe.png' 
import oceanside from '../images/oceanside.jpg'
import emailApp from '../images/emailapp.png'
import recipefinder from '../images/recipefinder.png'
import {ArrowLeft,ArrowRight,HelpOutline} from '@material-ui/icons'
import {useState} from 'react'

const projectItems = [
    {
        Title:"Email Verification",
        Photo:`${emailApp}`,
        Link:"https://github.com/BartoAmigo/EmailVerificationwPHP",
        Description:"Uses HTML to create a form and javascript to handle all of the actions. I use PHP to communicate with my mySQL database, and PHP to check verification status."
    },
    {
        Title:"Angular Dynamic Grid",
        Photo:`${GridPhoto}`,
        Link:"https://github.com/BartoAmigo/AngularGrid",
        Description:"Made Angular library called Ag-Grid to create a dynamic data grid that gets data from an excel sheet. The grid also has role priviledges, Admins are able to manipulate the grid more than users.",
    },
    {
        Title:"Food Recipe Finder", 
        Photo:`${recipefinder}`,
        Link:"https://github.com/BartoAmigo/RecipeFinder",
        Description:"Create a React App that is able to grab recipes from a REST api. I use vanilla CSS and create a Recipe component to contain each recipe.",
    },
    {
        Title:"TicTacToe",
        Photo:`${tictactoe}`,
        Link:"https://bartoamigo.github.io/TicTacToe/",
        Description:"Just a basic vanilla javascript TicTacToe game. I also implemented a counter.",
    },
    {
        Title:"AutoClicker",
        Photo:`${autoClicker}`,
        Link:"https://github.com/BartoAmigo/AutoClicker",
        Description:"A C++ WinForm Application where you set a speed of a click in microseconds. The program will then click for you at a certain speed.",
    },
]




const useStyles = makeStyles((theme)=>({
    root:{
        marginTop:"35px",
    },
    paper:{
        width:"500px",
        height:"500px",
        backgroundColor:`${theme.palette.secondary.main}`,
        [theme.breakpoints.down("xs")]:{
            width:"90%",
        },
    },
    phoneScreenContainer:{
        marginTop:"40px",
        height:"325px",
        width:"80%",
        backgroundSize:"cover",
        border:"solid black 2px",
        padding:"10px",
        backgroundColor:"white",
    },
    projectImg:{
        width:"100%",
        height:"100%",
        objectFit:"contain",
    },
    parallaxImage:
    {
        backgroundImage:`url(${oceanside})`,
        backgroundSize:"cover",
        backgroundAttachment:"fixed",
        backgroundPosition:"center",
        minHeight:"450px",
        width:"100%",
        height:"50%",
        filter:"brightness(50%) blur(1px)",
        transform:"translateZ(1px)",
        overflow:"hidden",
    },
    projectItemContainer:{
        paddingBottom:"100px",
    },
    buttonGroup:{
        marginTop:"15px", 
    },
    buttons:{
        marginLeft:"5px",
        marginRight:"5px",
    }
}))


function Projects(){



    const [currentProjectIndex,setCurrentProjectIndex] = useState(0); 
    const classes = useStyles();


    const handlePrev = () =>{
        if(currentProjectIndex===0)
        return; 
        else{
            setCurrentProjectIndex(currentProjectIndex-1); 
        }
    }
    const handleNext = () => {
        if(currentProjectIndex===projectItems.length-1)
        return; 
        else{
            setCurrentProjectIndex(currentProjectIndex+1); 
        }
    }


    return(
        <Grid container
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={classes.root}
        id="Projects"
        >
            <Grid item>
                <Typography
                align="center"
                className="title">
                    Projects
                </Typography>
            </Grid>
            <Grid item container
            justifyContent="center"
            alignItems="center"
            >
                <Grid item>
                    <IconButton>
                        <a href="https://github.com/BartoAmigo" target="_blank" rel="noreferrer">
                            <GitHubIcon fontSize="large"/>
                        </a>
                    </IconButton>
                </Grid>
                <Grid item>
                    <Typography variant="h6">GitHub</Typography>
                </Grid>
            </Grid>
            {/*NEW Project Selector*/}
            <Grid item container 
            className={classes.projectItemContainer}
            justifyContent="center"
            alignItems="center"
            >
                <Paper className={classes.paper}>
                    <Grid item container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    >
                        <Grid item
                        className={classes.phoneScreenContainer}
                        > 
                        <img className={classes.projectImg} src={projectItems[currentProjectIndex].Photo}/>
                        </Grid> 
                        <Grid item
                        style={{marginTop:"5px"}}>
                            <Typography variant="h5">
                                {projectItems[currentProjectIndex].Title}
                            </Typography>
                        </Grid>
                        <Grid item container 
                        justifyContent="center"
                        style={{marginTop:"5px"}}
                        >
                            <Button className={classes.buttons}
                            variant="outlined"
                            onClick={handlePrev}>
                                <ArrowLeft fontSize="large"/>
                            </Button>
                            <Button className={classes.buttons}
                            variant="outlined">
                                <HelpOutline fontSize="large"/>
                            </Button>
                            <Button className={classes.buttons}
                            variant="outlined"
                            onClick={handleNext}>
                                <ArrowRight fontSize="large"/>
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>

            
            {

            /*<Grid item className={classes.buttonGroup}>
                        <Button onClick={handlePrev} ><ArrowLeft fontSize="large"/></Button>
                        <Button onClick={handleNext} ><ArrowRight fontSize="large"/></Button>
                    </Grid>
            <Grid item>
                <Grid item 
                container 
                direction="column"
                alignItems="center"
                className={classes.projectItemContainer}
                >
                    {I want to display a img then i want to display image controls}
                    <ProjectItem Title={projectItems[currentProjectIndex].Title} 
                    Photo={projectItems[currentProjectIndex].Photo}
                    Link = {projectItems[currentProjectIndex].Link}
                    Description = {projectItems[currentProjectIndex].Description}/>
                </Grid>
            </Grid>
            */}
            <Grid item className={classes.parallaxImage}/>
        </Grid>
    )
}
export default Projects;