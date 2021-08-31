import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import trees from '../images/oregontree.jpg'
import profileimg from '../images/profileimg.jfif'

const useStyles = makeStyles((theme)=>({
    backgroundImage:{
        position:"relative",
        backgroundImage:`url(${trees})`,
        filter:"blur(3px) brightness(30%)",
        backgroundAttachment:"fixed",
        backgroundPosition:"center",
        backgroundSize:"cover",
        height:"50vh",
        transform:"translateZ(3px)",
        overflow:"hidden",
    },
    backgroundCover:{
        position:"relative",
        height:"50vh",
        overflow:"hidden",
        transform:"translateZ(3px)",
        backgroundColor:theme.palette.primary.main,
    },
    profileimg:{
        [theme.breakpoints.down("xs")]:{
            width:"200px",
        },
        width:"250px",
        height:"auto",
        border:`solid 5px ${theme.palette.secondary.main}`,
        borderRadius:"50%",
    },
    title:{
        fontFamily:"bookman",
        color:theme.palette.text.main,
    }

}));




function Header(){
    const classes = useStyles();
    return(
        <Grid className="parallaxContainer">
            <Grid className={classes.backgroundCover}/>
            <Grid container className='foreGround' direction="column" alignItems="center" justifyContent="center">
                <Grid item zeroMinWidth>
                    <img className={classes.profileimg}src={profileimg}></img>
                </Grid>
                <Grid item zeroMinWidth>
                    <Typography className={classes.title} variant="h3">Hello There</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Header