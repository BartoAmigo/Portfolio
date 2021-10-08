import {makeStyles,Typography,Grid} from '@material-ui/core'
import PropTypes from 'prop-types'
const useStyles = makeStyles((theme)=>({
    root:{
        marginTop:"20px",
        marginLeft:"10px",
        marginRight:"10px",
        border:"solid black 2px",
        width:"200px",
        height:"fit-content",
    }

}));

function SkillBox(props)
{
const classes = useStyles(); 
const {title, skills} = props; 



return(
    <Grid item className={classes.root}>        
    <Grid item container
        direction="column"
        className={classes.skillBox}
        >
            <Grid item>y
                <Typography align="center"><u>{title}</u></Typography>
            </Grid>
            <Grid item container alignItems="center" justifyContent="center" direction="column">
                {skills.map((skill)=>{
                    return(
                        <Grid key={skill} item>
                            {skill}
                        </Grid>
                    );
                })}
            </Grid>
            
        </Grid>
    </Grid>
    );
}

SkillBox.propTypes={
    title:PropTypes.string,
    skills:PropTypes.array, 
};

export default SkillBox; 