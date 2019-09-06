import { makeStyles } from "@material-ui/core"

export const timeout = 300

export default makeStyles(theme => ({
    root: {
        paddingTop: 0,
        flex: 1,
        overflowY: "auto",
        overflowX: "hidden",
    },
    exit: {
        transform: "translateX(100%)",
        transition: `transform ${timeout}ms`
    },
    hidden: {
        visibility: "hidden",
        width: 0,
        paddingLeft: 0,
        paddingRight: 0,
    }
}))