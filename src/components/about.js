import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import schoolPhoto from '../images/calstateLogo.png'


const skills = [
    "C",
    "C++",
    "C#",
    "Linux",
    "Javascript",
    "Python",
    "SQL",
    "React",
    "Angular",
    "Python",
    "PHP",
    "AWS",
];

const hobbies = [

]

const useStyles = makeStyles((theme)=>({

    backgroundCover:{
        padding:0,
        position:"relative",
        overflow:"hidden",
        height:"100vh",
        backgroundColor:theme.palette.secondary.main,
        [theme.breakpoints.down("xs")]:{
            height:"200vh",
        },
    },
    sectionTab:{
        position:"relative",
        marginLeft:"auto",
        marginRight:"auto",
        top:"50px",
        width:"300px",
        height:"70px",
        backgroundColor:theme.palette.secondary.main,
        '&>*':{
            color:theme.palette.primary.main,
        },
        borderBottom:`solid ${theme.palette.primary.main} 2px`
        /*border:`2px solid ${theme.palette.primary.main}`,*/
    },
    educationSection:{
        position:"relative",
        top:"100px",
        marginLeft:"auto",
        marginRight:"auto",
        color:"white",
        width:"800px",
        '&>*':{
            color:theme.palette.primary.main,
        },
        [theme.breakpoints.down("xs")]:{
            width:"90%",
            alignItems:"center",
        },
        [theme.breakpoints.down("sm")]:{
            width:"90%",
            alignItems:"center",
        }
    },
    educationItem:{
        marginTop:"20px",
        [theme.breakpoints.down("xs")]:{
            flexDirection:"column",
        },
        [theme.breakpoints.down("sm")]:{
            flexDirection:"column",
        },
    },
    skillSection:{
        position:"relative",
        top:"175px",
        marginLeft:"auto",
        marginRight:"auto",
        width:"800px",
        '&>*':{
            color:theme.palette.primary.main,
        },
        [theme.breakpoints.down("xs")]:{
            width:"90%",
            alignItems:"center",
        },
        [theme.breakpoints.down("sm")]:{
            width:"90%",
            alignItems:"center",
        },
    },
    skillItemContainer:{
        marginTop:"10px",
        [theme.breakpoints.down("xs")]:{
            justifyContent:"center",
        },
    },
    skillItem:{
        width:"100px",
        padding:"10px",
        borderRadius:"10%",
        height:"fit-content",
        border:` solid 2px ${theme.palette.primary.main}`,
        marginLeft:"10px",
        marginTop:"10px",
        '&>*':{
            fontSize:"18px",
        }
    },
}));


function About(){
    const classes = useStyles();
    return(
        <Grid id="About" className="parallaxContainer">
            <Grid className={classes.backgroundCover}/>
            <Grid container className="foreGround" direction="column">


                <Grid item container className={classes.sectionTab} justifyContent="center" alignItems="center">
                    <Typography align="center" variant="h4">About Me</Typography>
                </Grid>
                <Grid item container className={classes.educationSection} direction="column">
                    <Typography variant="h6">Education</Typography>
                    <Grid item container className={classes.educationItem} justifyContent="center" alignItems="center" >
                        <Grid item xs>
                            <img align="center" style={{width:"75px",height:"auto",marginBottom:"10px"}} src={schoolPhoto} alt="photoOfSanMarcos"/>
                        </Grid>
                        <Grid item>
                            <Typography align="center" variant="h6">Bachelors in Computer Science from California State University of San Marcos.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container className={classes.skillSection} direction="column">
                    <Typography variant="h6">
                        Skills
                    </Typography>
                    <Grid item container className={classes.skillItemContainer}>
                        {skills.map((skill,index)=>{
                            return(
                                <Grid key={index} item zeroMinWidth className={classes.skillItem}>
                                    <Typography align="center">{skill}</Typography>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
                
            </Grid>

        </Grid>
    )
}
export default About