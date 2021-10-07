import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme)=>({
    root:{
        marginTop:"35px"
    },
    paper:{
        width:"300px",
    }
}))


function Contact()
{
    const classes = useStyles(); 
    return(
    <Grid item container
    id="Contact"
    className={classes.root}
    direction="column"
    alignItems="center"
    justifyContent="center"
    >
        <Grid item>
            <Typography className="title">Contact Me</Typography>
        </Grid>
        <Grid item>
            <Paper className={classes.paper}>
                Hi
            </Paper>
        </Grid>
    </Grid>
    )
}
export default Contact; 