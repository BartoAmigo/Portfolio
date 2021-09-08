import Grid from '@material-ui/core/Grid' 
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import profileImg from '../images/profileimg.jpg'
import oregonForest from '../images/oregonforest.jpg'

const useStyles = makeStyles((theme)=>({
    container:{
        width:"100%",
        overflow:"hidden",
    },
    foreGround:{
        position:"absolute",
        marginTop:"65px",
        zIndex:1,
        color:"white",
        
    },
    img:{
        marginTop:"auto",
        width:"40%",
        height:"auto",
        borderRadius:"50%",
        [theme.breakpoints.down('xs')]:{
            width:"50%",
        }
    },
    parallaxImage:{
        backgroundImage:`url(${oregonForest})`,
        backgroundSize:"cover",
        backgroundAttachment:"fixed",
        backgroundPosition:"center",
        minHeight:"450px",
        width:"100%",
        height:"50%",
        filter:"brightness(50%) blur(1px)",
        overflow:"hidden",

    }
}));

function Headerv2(){
    const classes = useStyles(); 
    
    return(
    <Grid 
    container 
    className={classes.container}
    >
        <Grid item 
        className={classes.parallaxImage}
        />
        <Grid item container 
        className={classes.foreGround} 
        direction="column" 
        alignItems="center"
        justifyContent="center"
        >
            <Grid item 
            align="center"
            >
                <img src={profileImg} 
                alt="linkedin "
                className={classes.img}/>
            </Grid>
            <Grid item>
                <Typography
                variant="h4"
                style={{fontFamily:"monospace"}}
                >
                    Hi!
                </Typography>
            </Grid>
        </Grid>
        
    </Grid>
    );
}
export default Headerv2; 