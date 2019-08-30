import React from "react"
import { Paper, InputBase, IconButton } from "@material-ui/core"
import { Menu, AddCircle } from "@material-ui/icons"
import useStyles from "./useStyles"
import useLogic from "./useLogic"

const Input = React.memo(() => {
    const classes = useStyles()
    const { filter, updateFilter, addItem } = useLogic()

    return (
        <Paper className={classes.root}>
            <IconButton>
                <Menu />
            </IconButton>
            <InputBase
                value={filter}
                onChange={updateFilter}
                className={classes.input}
                placeholder="Producto" />
            <IconButton onClick={addItem} disabled={!filter}>
                <AddCircle />
            </IconButton>
        </Paper>
    )
})

export default Input