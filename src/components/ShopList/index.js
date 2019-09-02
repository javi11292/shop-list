import React from "react"
import { List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox, IconButton, Menu, MenuItem } from "@material-ui/core"
import { MoreVert } from "@material-ui/icons"
import { TransitionGroup } from "react-transition-group"
import ItemWrapper from "components/ItemWrapper"
import useLogic from "./useLogic"

const ShopList = React.memo(() => {
    const { items, updateStock, openMenu, closeMenu, anchor, removeItem, classes, timeout, isBuying } = useLogic()

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
                <TransitionGroup component={null}>
                    {items.map(item => (
                        <ItemWrapper
                            isEnabled={!item.inStock && isBuying}
                            key={item.id}
                            item={item}
                            classes={classes}
                            timeout={timeout}>
                            <ListItem
                                button
                                name={item.id}
                                onClick={updateStock}>
                                <Checkbox
                                    className={isBuying ? classes.hidden : undefined}
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
                        </ItemWrapper>
                    ))}
                </TransitionGroup>
            </List>
        </React.Fragment>
    )
})

export default ShopList