import React from "react"
import { List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox } from "@material-ui/core"
import useLogic from "./useLogic"
import useStyles from "./useStyles"

const ShopList = React.memo(() => {
    const classes = useStyles()
    const { items, updateStock } = useLogic()

    return (
        <List dense className={classes.root}>
            {items.map(item => (
                <ListItem key={item.id} button>
                    <ListItemText primary={item.name} />
                    <ListItemSecondaryAction>
                        <Checkbox
                            id={item.id}
                            onChange={updateStock}
                            checked={item.inStock} />
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    )
})

export default ShopList