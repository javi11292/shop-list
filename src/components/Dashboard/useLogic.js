import { useEffect } from "react"
import { useStore } from "eztore"
import Item from "models/Item"

function useLogic() {
    const dispatchItems = useStore("items", true)

    useEffect(() => {
        Object.values(localStorage).forEach(item => {
            dispatchItems({ action: "set", payload: new Item(JSON.parse(item)) })
        })
    }, [dispatchItems])
}

export default useLogic