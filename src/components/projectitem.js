import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

const useStyles= makeStyles((theme) => ({
    img:{
        width:"auto",
        height:"200px",
    },
    container:{
        paddingTop:"50px",
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
        alignItems="center"
        className={classes.container}>
            <Typography variant="h6">Project: {Title}</Typography>
            <a href={Link}>Link</a>
            <img className={classes.img} src={Photo} alt={Title}/>
            <Typography><u><b>Summary</b></u>:{Description}</Typography>
        </Grid>
    )
}
export default ProjectItem