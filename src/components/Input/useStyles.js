import { makeStyles } from "@material-ui/core"

export default makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "center",
        margin: theme.spacing(2),
        padding: theme.spacing(0.75),
    },
    input: {
        flex: 1,
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    addIcon: {
        padding: theme.spacing(0),
        color: "green",
    },
}))