import { useEffect, useCallback, useState } from "react"
import { useStore } from "eztore"
import useItemUpdater from "hooks/useItemUpdater"
import useStyles, { timeout } from "./useStyles"

function useLogic() {
    const [filter, setFilter] = useStore("filter")
    const [items] = useStore("items")
    const [filteredItems, setFilteredItems] = useState([])
    const { addItem, deleteItem } = useItemUpdater()
    const [anchor, setAnchor] = useState()
    const [isBuying, setBuying] = useState(filter.isBuying)

    useEffect(() => {
        const regExp = new RegExp(filter.name, "i")
        const filteredItems = Object.values(items).reduce((acc, item) => {
            if (item.name.match(regExp) && (!filter.isBuying || !item.inStock)) return [...acc, item]
            return acc
        }, []).sort((a, b) => a.name.localeCompare(b.name))

        if (!filteredItems.length && filter.isBuying) setFilter({ isBuying: false })

        setFilteredItems(filteredItems)
        setBuying(filter.isBuying)
    }, [items, filter, setFilter])

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

    const classes = useStyles()

    return { items: filteredItems, updateStock, openMenu, closeMenu, anchor, removeItem, classes, timeout, isBuying }
}

export default useLogic