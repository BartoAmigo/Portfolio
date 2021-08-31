import { createStyles,makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() =>
    createStyles({
        '@global':{
            '.parallaxContainer':{
                position:"relative",
                width:"100%",
                height:"fit-content",
                transform:"translateZ(0)",
                backgroundColor:"black",
                overflow:"hidden",
                padding:0,
            },
            '.foreGround':{
                position:"absolute",
                width:"100%",
                top:0,
                color:"white",
                transform:"translateZ(1px)",
                overflow:"hidden",
                height:"100%",
            },
        },
    }
    )
);

const GlobalStyles = () => {
    useStyles(); 
    return null; 
};

export default GlobalStyles;

