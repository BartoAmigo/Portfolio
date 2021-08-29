import { createStyles,makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() =>
    createStyles({
        '@global':{

        }
    }
    )
);

const GlobalStyles = () => {
    useStyles(); 
    return null; 
};

export default GlobalStyles;

