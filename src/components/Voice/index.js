import React from "react"
import { Fab } from "@material-ui/core"
import { Mic } from "@material-ui/icons"
import useStyles from "./useStyles"

const Voice = React.memo(() => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Fab className={classes.button} size="small">
                <Mic />
            </Fab>
        </div>
    )
})

export default Voice