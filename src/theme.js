import { createTheme,responsiveFontSizes} from "@material-ui/core";
import { green,red } from "@material-ui/core/colors";

const theme = createTheme({
    palette:{
        primary:{
            main:green[800],
        },
        secondary:{
            main:red[500],
        },
    }
})

export default responsiveFontSizes(theme);