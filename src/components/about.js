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
    "HTML",
    "CSS",
    "Python",
    "SQL",
    "React",
    "Angular",
    "PHP",
    "AWS",
    "Git",
];



const useStyles = makeStyles((theme)=>({

    backgroundCover:{
        padding:0,
        position:"relative",
        overflow:"hidden",
        height:"100vh",
        backgroundColor:theme.palette.secondary.main,
        [theme.breakpoints.down("xs")]:{
            height:"260vh",
        },
        [theme.breakpoints.up(370)]:{
            height:"180vh",
        },
        [theme.breakpoints.up("sm")]:{
            height:"110vh",
        },
        [theme.breakpoints.up("md")]:{
            height:"100vh",
        }
    },
    subTitle:{
        [theme.breakpoints.down("sm")]:{
            fontSize:"20px",
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
        },
    },
    hobbySection:{
        position:"relative",
        top:"250px",
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
    hobbyItem:{
        marginTop:"10px",
        border:`solid ${theme.palette.primary.main} 2px`,
        borderRadius:"1%",
        padding:"10px",
        width:"790px",
        [theme.breakpoints.down("xs")]:{
            width:"90%",
        },
        [theme.breakpoints.down("sm")]:{
            width:"90%",
        },
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
                    <Typography variant="h6" className={classes.subTitle}>Education</Typography>
                    <Grid item container className={classes.educationItem} justifyContent="center" alignItems="center" >
                        <Grid item xs>
                            <img align="center" style={{width:"75px",height:"auto",marginBottom:"10px"}} src={schoolPhoto} alt="photoOfSanMarcos"/>
                        </Grid>
                        <Grid item>
                            <Typography align="center" variant="h6">Bachelors in Computer Science from California State University San Marcos.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container className={classes.skillSection} direction="column">
                    <Typography variant="h6" className={classes.subTitle}>
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

                <Grid item container className={classes.hobbySection} direction="column">
                        <Typography variant="h6" className={classes.subTitle}>
                            Hobbies
                        </Typography>
                        <Grid item className={classes.hobbyItem}>
                            <Typography align="center">
                                I enjoy a lot of things in life. I like to code whenever I am not busy and for 
                                a physical activity I like to skateboard. I like to travel to northern California and the northern states to hike, 
                                and eat mysterious plants. I recenetly discovered how to make rope and there is nothing better than enjoying 
                                nature's scenery while making rope. Oh and I like eating cheese burgers (more than the average person) . 
                            </Typography>
                        </Grid>
                </Grid>
                
            </Grid>

        </Grid>
    )
}
export default About