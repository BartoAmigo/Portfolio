
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography' 
import IconButton from '@material-ui/core/IconButton'
import {makeStyles} from '@material-ui/core/styles'
import  GitHubIcon from '@material-ui/icons/GitHub'

const projectItem = [
    {
        Title:"Email Verification",
        Photo:"Hi",
        Link:"https://github.com/BartoAmigo/EmailVerificationwPHP",
        Description:"Uses HTML to create a form and javascript to handle all of the actions. I use PHP to communicate with my mySQL database, and PHP to check verification status."
    },
    {
        Title:"Angular Dynamic Grid",
        Photo:"Hi",
        Link:"https://github.com/BartoAmigo/AngularGrid",
        Description:"Made Angular library called Ag-Grid to create a dynamic data grid that gets data from an excel sheet. The grid also has role priviledges, Admins are able to manipulate the grid more than users.",
    },
    {
        Title:"Food Recipe Finder", 
        Photo:"Hi",
        Link:"https://github.com/BartoAmigo/RecipeFinder",
        Description:"Create a React App that is able to grab recipes from a REST api. I use vanilla CSS and create a Recipe component to contain each recipe.",
    },
    {
        Title:"TicTacToe",
        Photo:"Hi",
        Link:"https://bartoamigo.github.io/TicTacToe/",
        Description:"Just a basic vanilla javascript TicTacToe game. I also implemented a counter.",
    },
    {
        Title:"AutoClciker",
        Photo:"Hi",
        Link:"https://github.com/BartoAmigo/AutoClicker",
        Description:"A C++ WinForm Application where you set a speed of a click in microseconds. The program will then click for you at a certain speed.",
    },
]




const useStyles = makeStyles((theme)=>({
    root:{
        marginTop:"35px",
    },
    paper:{
        flexGrow:1
    },
}))


function Projects(){
    const classes = useStyles();

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
            <Grid item>
            </Grid>
        </Grid>
    )
}
export default Projects;