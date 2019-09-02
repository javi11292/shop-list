import { useState, useCallback } from "react"
import { useStore } from "eztore"
import useItempUpdater from "hooks/useItemUpdater"
import createItem from "models/Item"
import useStyles from "./useStyles"

function useLogic() {
    const [hasFocus, setFocus] = useState(false)
    const [filter, setFilter] = useStore("filter")
    const { addItem } = useItempUpdater()

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

    const updateFocus = useCallback(value => () => setFocus(value), [])

    const classes = useStyles({ hasFocus })

    return { filter, updateFilter, addItem: updateItem, handleKeyDown, updateFocus, classes }
}

export default useLogic