import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme)=>({
    root:{
        marginTop:"35px",
        paddingBottom:"100px",
    },
    paper:{
        width:"500px",
        padding:"10px",
    }
}))


function Contact()
{
    const classes = useStyles(); 
    return(
    <Grid container
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
               <Grid item container direction="column">
                   <Grid item>
                       <Typography variant="h5" align="center">Bart Falzarano</Typography>
                   </Grid>
                   <Grid item>
                       <div style={{borderBottom:"solid black 2px", width:"100%", marginTop:"5px"}}/>
                    </Grid> 
                    <Grid item>
                        <Typography align="center">
                            Email: bartfalzaranoiii@gmail.com
                        </Typography>
                        <Typography align="center">
                            Phone: 7604729205
                        </Typography>
                    </Grid>

               </Grid>
            </Paper>
        </Grid>
    </Grid>
    )
}
export default Contact; 