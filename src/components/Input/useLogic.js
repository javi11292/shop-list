import { useCallback } from "react"
import { useStore } from "eztore"
import Item from "models/Item"

function useLogic() {
    const [filter, setFilter] = useStore("filter")
    const dispatchItems = useStore("items", true)

    const updateFilter = useCallback(event => {
        setFilter(event.target.value)
    }, [setFilter])

    const addItem = useCallback(() => {
        dispatchItems({ action: "set", payload: new Item({ name: filter }) })
    }, [filter, dispatchItems])

    return { filter, updateFilter, addItem }
}

export default useLogic