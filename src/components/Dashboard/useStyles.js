import { makeStyles } from "@material-ui/core"

export default makeStyles(theme => ({
    root: {
        ...theme.typography.body1,
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        maxWidth: theme.spacing(100)
    }
}))