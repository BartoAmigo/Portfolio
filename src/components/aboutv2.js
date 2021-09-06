import {Typography,Grid,makeStyles} from '@material-ui/core'
import schoolPicture from '../images/calstateLogo.png'

const useStyles = makeStyles((theme)=>({
    root:{
        marginTop:"35px",
    },
    img:{
        minWidth:"65px",
        width:"7rem",
        height:"auto",
        marginBottom:"5px",
        marginRight:"20px",
        [theme.breakpoints.down('xs')]:{
            marginRight:"0px",
        }
    },
    schoolContainer:{
        width:"90%",
        marginTop:"15px",
        [theme.breakpoints.down('xs')]:{
            flexDirection:"column",
        }   
    },
}));


function Aboutv2(){
    const classes = useStyles(); 
    return(
    <Grid container 
    id="About" 
    className={classes.root}
    direction="column"
    alignItems="center"
    justifyContent="center"
    >
        <Grid item>
            <Typography 
            variant="h5"
            className="title"
            >
                About Me
            </Typography>
        </Grid>
            <Grid item>
                <Typography
                variant="h6"
                 className="subtitle"
                 >
                    Education
                </Typography>
            </Grid>
            <Grid
            item container
            direction="row" 
            alignItems="center"
            justifyContent="center"
            className={classes.schoolContainer}
            >
                <Grid>
                <img
                align="center" 
                src={schoolPicture} 
                alt="csusm logo"
                className={classes.img}
                />
                </Grid>
                <Grid item>
                    <Typography align="center">
                        Bachelors in Computer Information Systems
                    </Typography>
                    <Typography 
                    align="center"
                    >
                        California State University San Marcos
                    </Typography>
                </Grid>
            </Grid>
            <Grid item>
                 <Typography
                 className="subtitle">
                     Skills
                 </Typography>
            </Grid>
    </Grid>
    )
}

export default Aboutv2; 