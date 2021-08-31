import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles((theme)=>({

    backgroundCover:{
        padding:0,
        position:"relative",
        overflow:"hidden",
        height:"100vh",
        backgroundColor:theme.palette.secondary.main,
    },
    sectionTab:{
        top:"20px",
        position:"",
        width:"200px",
        height:"200px",
        backgroundColor:theme.palette.secondary.main,
        '&>*':{
            color:theme.palette.primary.main,
        },
        border:`2px solid ${theme.palette.primary.main}`,
        borderRadius:"50%",
    },
    educationSection:{
    },
}));


function About(){
    const classes = useStyles();
    return(
        <Grid id="About" className="parallaxContainer">
            <Grid className={classes.backgroundCover}/>
            <Grid container className="foreGround" alignItems="center" direction="column">
                <Grid item container className={classes.sectionTab} justifyContent="center" alignItems="center">
                    <Typography variant="h6">About Me</Typography>
                </Grid>
                <Grid item className={classes.educationSection} zeroMinWidth>
                    <Typography align="left">Resume</Typography>
                </Grid>
                <Grid item container className={classes.hobbieSection}>
                    <Typography>
                        Hobbies
                    </Typography>
                </Grid>
            </Grid>

        </Grid>
    )
}
export default About