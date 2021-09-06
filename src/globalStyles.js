import { createStyles,makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() =>
    createStyles({
        '@global':{
            ".title":{
                fontFamily:"Monospace",
                fontSize:"2rem",
                borderBottom:"solid black 2px",
                marginBottom:"30px",
            },
            ".subtitle":{
                marginTop:"30px",
                fontFamily:"Monospace",
                fontSize:"1.3rem",
                borderBottom:"dotted black 2px",
                width:"fit-content",
                marginBottom:"15px",
                fontWeight:"bold",
            }
        },
    }
    )
);

const GlobalStyles = () => {
    useStyles(); 
    return null; 
};

export default GlobalStyles;

