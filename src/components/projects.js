import {Grid,Typography,makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    root:{
        marginTop:"35px",
    }
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
        </Grid>
    )
}
export default Projects;