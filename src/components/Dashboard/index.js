import React from "react"
import ListenButton from "components/ListenButton"
import ShopList from "components/ShopList"
import Input from "components/Input"
import useStyles from "./useStyles"
import useLogic from "./useLogic"

const Dashboard = React.memo(() => {
    const classes = useStyles()
    useLogic()

    return (
        <div className={classes.root}>
            <Input />
            <ShopList />
            <ListenButton />
        </div>
    )
})

export default Dashboard