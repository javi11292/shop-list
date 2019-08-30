import React from "react"
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Typography, Divider } from "@material-ui/core"
import { Edit } from "@material-ui/icons"
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
                <ListItem button>
                    <ListItemIcon><Edit /></ListItemIcon>
                    <ListItemText primary="Test" />
                </ListItem>
            </List>
        </Drawer>
    )
})

export default MenuDrawer