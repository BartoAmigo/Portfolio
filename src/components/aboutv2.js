import {Typography,Grid,makeStyles} from '@material-ui/core'
import schoolPicture from '../images/calstateLogo.png'
import portLand from '../images/portland.jpg'
import SkillBox from './skillbox'

const skills = [
    {
        Title:"Programming Languages",
        Items:["C++","C#","C","Python"]
    },
    {
        Title:"Database Languages",
        Items:["SQL","PHP","NoSQL"]
    },
    {
        Title:"Web Programming",
        Items:["HTML","CSS","Javascript"]
    },
    {
        Title:"Tools",
        Items:["Git","MongoDB","Mysql","AWS","AdobeXD","NodeJS"]
    },
]
    
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
    skillBoxesContainer:{
        [theme.breakpoints.down('xs')]:{
            flexDirection:"column",
            alignItems:"center",
        },
    },
    summaryBox:{
        width:"65%",
        [theme.breakpoints.down('sm')]:{
            width:"90%",
        },
        paddingBottom:"20px",
    },
    parallaxImage:
    {
        backgroundImage:`url(${portLand})`,
        backgroundSize:"cover",
        backgroundAttachment:"fixed",
        backgroundPosition:"center",
        minHeight:"450px",
        width:"100%",
        height:"50%",
        filter:"brightness(50%) blur(1px)",
        transform:"translateZ(1px)",
        overflow:"hidden",
    }
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
            <Grid item 
            container 
            className={classes.skillBoxesContainer}
            justifyContent="center"
            >
                {skills.map((skill)=>{
                    return(
                        <SkillBox key={skill.Title} title={skill.Title} skills={skill.Items}/>
                    )})}
            </Grid>
            <Grid item>
                <Typography className="subtitle">Summary</Typography>
            </Grid>
            <Grid item container
            className={classes.summaryBox}
            justifyContent="center"
            >
                <Typography>
                    Hi, my name is Bartholomew Falzarano, but everybody just calls me Bart. I have tinkered with computers for most of my life.
                    I have taken computers apart that still had ribbons(old wiring for computers), and I have hacked the software on a PSP. 
                    I have a strong interest in learning about Operating Systems because manipulating a system sounds really fun. However, I love everything about
                    programming, to me it's all fun! I've coded projects in almost every level of language except binary because that is pretty hard to do (Yes, I
                    have coded in assembly and yes I enjoyed it). I have a admiration for Linux and would prefer to use Linux more than Windows. My role models for programming 
                    is Terry Davis and Linus Torvalds. Their desire to create something for fun and then turning them into full blown Operating Systems is really cool.
                </Typography>
            </Grid>
            <Grid className={classes.parallaxImage}/>
    </Grid>
    )
}

export default Aboutv2; 