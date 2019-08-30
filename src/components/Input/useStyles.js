import { makeStyles } from "@material-ui/core"

export default makeStyles(theme => ({
    root: {
        display: "flex",
        margin: theme.spacing(2),
    },
    input: {
        flex: 1,
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    }
}))