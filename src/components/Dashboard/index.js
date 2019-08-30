import React from "react"
import Voice from "components/Voice"
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
            <Voice />
        </div>
    )
})

export default Dashboard