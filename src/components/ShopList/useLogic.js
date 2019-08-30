import { useEffect, useCallback, useState } from "react"
import { useStore } from "eztore"
import useItemUpdater from "hooks/useItemUpdater"

function useLogic() {
    const [filter] = useStore("filter")
    const [items] = useStore("items")
    const [filteredItems, setFilteredItems] = useState([])
    const { addItem, deleteItem } = useItemUpdater()
    const [anchor, setAnchor] = useState()

    useEffect(() => {
        const regExp = new RegExp(filter.name, "i")
        const filteredItems = Object.values(items).reduce((acc, item) => {
            if (item.name.match(regExp)) return [...acc, item]
            return acc
        }, [])

        setFilteredItems(filteredItems)
    }, [items, filter])

    const updateStock = useCallback(event => {
        const item = items[event.currentTarget.getAttribute("name")]
        addItem({ ...item, inStock: !item.inStock })
    }, [items, addItem])

    const openMenu = useCallback(event => {
        setAnchor(event.currentTarget)
    }, [])

    const closeMenu = useCallback(() => {
        setAnchor()
    }, [])

    const removeItem = useCallback(() => {
        if (!anchor) return
        deleteItem(items[anchor.getAttribute("name")])
        closeMenu()
    }, [deleteItem, items, anchor, closeMenu])

    return { items: filteredItems, updateStock, openMenu, closeMenu, anchor, removeItem }
}

export default useLogic