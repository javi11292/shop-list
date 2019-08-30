import { useCallback } from "react"
import { useStore } from "eztore"
import useItempUpdater from "hooks/useItemUpdater"
import Item from "models/Item"

function useLogic() {
    const [filter, setFilter] = useStore("filter")
    const { addItem } = useItempUpdater()

    const updateFilter = useCallback(event => {
        setFilter(event.target.value)
    }, [setFilter])

    const updateItem = useCallback(() => {
        addItem(new Item({ name: filter }))
    }, [addItem, filter])

    return { filter, updateFilter, addItem: updateItem }
}

export default useLogic