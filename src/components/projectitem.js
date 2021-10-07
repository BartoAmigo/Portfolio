import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

const useStyles= makeStyles((theme) => ({
    img:{
        width:"30%",
        height:"auto",
    }
}))



function ProjectItem(props){
    /*must get prop values*/ 
    const{Title, Photo, Link, Description} = props;
    /*get styles from makestyles */ 
    const classes = useStyles(); 
    return(
        <Grid item container
        direction="column"
        alignItems="center">
            <Typography variant="h6">Project: {Title}</Typography>
            <a href={Link}>Link</a>
            <img className={classes.img} src={Photo}/>
            <Typography><u><b>Summary</b></u>:{Description}</Typography>
        </Grid>
    )
}
export default ProjectItem