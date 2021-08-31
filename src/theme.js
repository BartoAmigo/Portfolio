import { createTheme,responsiveFontSizes} from "@material-ui/core";

const theme = createTheme({
    palette:{
        primary:{
            main:"#05386B",
        },
        secondary:{
            main:"#5CDB95",
        },
        text:{
            main:"#EDF5E1",
        }
    },
    breakpoints:{
       
    }
})

export default responsiveFontSizes(theme);