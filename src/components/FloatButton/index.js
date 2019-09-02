import React from "react"
import { Fab, Tooltip } from "@material-ui/core"
import { PlayArrow, Stop } from "@material-ui/icons"
import useLogic from "./useLogic"

const FloatButton = React.memo(() => {
    const { toggleBuying, isBuying, classes } = useLogic()

    return (
        <div className={classes.root}>
            <Tooltip title={`${isBuying ? "Terminar" : "Empezar"} compra`}>
                <Fab className={classes.button} size="medium" onClick={toggleBuying}>
                    {isBuying
                        ? <Stop />
                        : <PlayArrow />
                    }
                </Fab>
            </Tooltip>
        </div>
    )
})

export default FloatButton