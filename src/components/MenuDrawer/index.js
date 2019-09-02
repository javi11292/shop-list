import React from "react"
import { Drawer, List, ListItem, ListItemText, Typography, Divider } from "@material-ui/core"
import useStyles from "./useStyles"
import useLogic from "./useLogic"

const MenuDrawer = React.memo(() => {
    const classes = useStyles()
    const { isOpen, toggleOpen, toggleBuying, isBuying } = useLogic()

    return (
        <Drawer open={isOpen} onClose={() => toggleOpen()}>
            <Typography variant="h6" className={classes.title}>Shop List</Typography>
            <Divider />
            <List>
                <ListItem button
                    className={classes.item}
                    onClick={toggleBuying}>
                    <ListItemText primary={`${!isBuying ? "Empezar" : "Terminar"} compra`} />
                </ListItem>
            </List>
        </Drawer>
    )
})

export default MenuDrawer