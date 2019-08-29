import React from "react"
import ListenButton from "components/ListenButton"
import ShopList from "components/ShopList"
import useStyles from "./useStyles"

const Dashboard = React.memo(() => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <ShopList />
            <ListenButton />
        </div>
    )
})

export default Dashboard