import { useCallback } from "react"
import { useStore } from "eztore"
import useItempUpdater from "hooks/useItemUpdater"
import createItem from "models/Item"

function useLogic() {
    const [filter, setFilter] = useStore("filter")
    const { addItem } = useItempUpdater()
    const toggleOpen = useStore("isDrawerOpen", true)

    const updateFilter = useCallback(event => {
        setFilter({ name: event.target.value })
    }, [setFilter])

    const updateItem = useCallback(() => {
        if (!filter.name) return
        addItem(createItem({ name: filter.name }))
        setFilter({ name: "" })
    }, [setFilter, addItem, filter])

    const handleKeyDown = useCallback(event => {
        if (event.key === "Enter") updateItem()
    }, [updateItem])

    return { filter, updateFilter, addItem: updateItem, toggleOpen, handleKeyDown }
}

export default useLogic