import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import {Phone,Email} from '@material-ui/icons'

const useStyles = makeStyles((theme)=>({
    root:{
        marginTop:"35px",
        paddingBottom:"100px",
    },
    paper:{
        width:"500px",
        padding:"10px",
    },
    icons:{
        marginRight:"10px",
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
        <Grid item container 
        direction="column"
        alignItems="center"
        >
            <Grid item container
            direction="row"
            alignItems="center"
            justifyContent="center"
            >
                <Grid item>
                    <Email className={classes.icons}/>
                </Grid>
                <Grid item>
                    <Typography variant="h5">bartfalzaranoiii@gmail.com</Typography>
                </Grid>
            </Grid>
            <Grid item container
            direction="row"
            alignItems="center"
            justifyContent="center">
                <Grid item>
                    <Phone className={classes.icons} fontSize="medium"/>
                </Grid>
                <Grid item>
                    <Typography variant="h5">760-472-9205</Typography>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    )
}
export default Contact; 