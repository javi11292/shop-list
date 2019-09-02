import React from "react"
import { Paper, InputBase, IconButton } from "@material-ui/core"
import { Menu, AddCircle } from "@material-ui/icons"
import useStyles from "./useStyles"
import useLogic from "./useLogic"

const Input = React.memo(() => {
    const classes = useStyles()
    const { filter, updateFilter, addItem, toggleOpen, handleKeyDown } = useLogic()
    const { name } = filter

    return (
        <Paper className={classes.root}>
            <IconButton className={classes.menuIcon} onClick={toggleOpen}>
                <Menu />
            </IconButton>
            <InputBase
                value={name}
                onKeyDown={handleKeyDown}
                onChange={updateFilter}
                className={classes.input}
                placeholder="Añadir producto" />
            <IconButton onClick={addItem} disabled={!name} className={classes.addIcon}>
                <AddCircle fontSize="large" />
            </IconButton>
        </Paper>
    )
})

export default Input