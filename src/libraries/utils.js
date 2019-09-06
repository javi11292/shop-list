const utils = {
    registerVisit: () => fetch("https://javiscript-visit-counter.herokuapp.com/", { method: "PUT" })
}

export default utils