import { useCallback } from "react"
import { useStore } from "eztore"
import useItempUpdater from "hooks/useItemUpdater"
import createItem from "models/Item"

function useLogic() {
    const [filter, setFilter] = useStore("filter")
    const { addItem } = useItempUpdater()

    const updateFilter = useCallback(event => {
        setFilter({ name: event.target.value })
    }, [setFilter])

    const updateItem = useCallback(() => {
        addItem(createItem({ name: filter.name }))
        setFilter({ name: "" })
    }, [setFilter, addItem, filter])

    return { filter, updateFilter, addItem: updateItem }
}

export default useLogic