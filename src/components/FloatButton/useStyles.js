import { makeStyles } from "@material-ui/core"

export default makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "center",
    },
    button: {
        margin: theme.spacing(2),
        marginLeft: "auto",
        color: props => props.isBuying ? "red" : "green"
    },
}))