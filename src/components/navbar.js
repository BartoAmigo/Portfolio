import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon  from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import {useState} from 'react'

const useStyles = makeStyles({
    root:{

    },
    title:{
        color:"black",
        flexGrow:1,
        fontFamily:"monospace",
    },
    menuItem:{
        
    }
});

function Navbar(){
    const classes = useStyles();


    const [anchorEl,setAnchorEl] = useState(null);
    const open = Boolean(anchorEl)


    const handleMenu = (event) =>{
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () =>{
        setAnchorEl(null);
    }

    return(
        <AppBar elevation={0} position="fixed">
            <Toolbar>
                <IconButton edge="start" onClick={handleMenu}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" className={classes.title} align="center">
                    Bart Falzarano
                </Typography>
                <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical:'top',
                    horizontal:'left'
                }}
                keepMounted
                transformOrigin={{
                    vertical:'top',
                    horizontal:'left'
                }}
                open={open}
                onClose={handleClose}
                >
                    <MenuItem className={classes.menuItem} component="a" href="#About">About Me</MenuItem>
                    <MenuItem component="a" href="#Projects" >Projects</MenuItem>
                    <MenuItem component="a" href="#Contact">Contact Me</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;