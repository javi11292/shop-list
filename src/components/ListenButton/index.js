import React from "react"
import { Fab } from "@material-ui/core"
import { Mic } from "@material-ui/icons"
import useStyles from "./useStyles"

const ListenButton = React.memo(() => {
    const classes = useStyles()

    return (
        <Fab className={classes.root}>
            <Mic />
        </Fab>
    )
})

export default ListenButton