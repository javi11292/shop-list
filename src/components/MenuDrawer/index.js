import React from "react"
import { Drawer, List, ListItem, ListItemText, ListItemSecondaryAction, Typography, Divider, Checkbox } from "@material-ui/core"
import { useStore } from "eztore"
import useStyles from "./useStyles"

const MenuDrawer = React.memo(() => {
    const [isOpen, toggleOpen] = useStore("isDrawerOpen")
    const classes = useStyles()

    return (
        <Drawer open={isOpen} onClose={() => toggleOpen()}>
            <Typography variant="h6" className={classes.title}>Shop List</Typography>
            <Divider />
            <List>
                <ListItem className={classes.item}>
                    <ListItemText primary="Mostrar todo" />
                    <ListItemSecondaryAction>
                        <Checkbox />
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </Drawer>
    )
})

export default MenuDrawer