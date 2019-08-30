import React from "react"
import ListenButton from "components/ListenButton"
import ShopList from "components/ShopList"
import Input from "components/Input"
import useStyles from "./useStyles"

const Dashboard = React.memo(() => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Input />
            <ShopList />
            <ListenButton />
        </div>
    )
})

export default Dashboard