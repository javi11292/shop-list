import React from "react"
import { List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox, IconButton, Menu, MenuItem } from "@material-ui/core"
import { MoreVert } from "@material-ui/icons"
import useLogic from "./useLogic"
import useStyles from "./useStyles"

const ShopList = React.memo(() => {
    const classes = useStyles()
    const { items, updateStock, openMenu, closeMenu, anchor, removeItem } = useLogic()

    return (
        <React.Fragment>
            <Menu
                name="menu"
                anchorEl={anchor}
                onClose={closeMenu}
                open={!!anchor}>
                <MenuItem onClick={removeItem}>Eliminar</MenuItem>
            </Menu>
            <List className={classes.root}>
                {items.map(item => (
                    <ListItem
                        button
                        key={item.id}
                        name={item.id}
                        onClick={updateStock}>
                        <Checkbox
                            color="primary"
                            disableRipple
                            checked={item.inStock} />
                        <ListItemText primary={item.name} />
                        <ListItemSecondaryAction>
                            <IconButton onClick={openMenu} name={item.id}>
                                <MoreVert />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </React.Fragment>
    )
})

export default ShopList