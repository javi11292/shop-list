import React from "react"
import ReactDOM from "react-dom"
import App from "components/App"
import * as serviceWorker from "serviceWorker"
import utils from "libraries/utils"

utils.registerVisit()

ReactDOM.render(<App />, document.getElementById("root"))

serviceWorker.register()