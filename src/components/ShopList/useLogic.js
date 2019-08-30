import { useEffect, useCallback, useState } from "react"
import { useStore } from "eztore"
import Item from "models/Item"

function useLogic() {
    const [filter] = useStore("filter")
    const [items, dispatchItems] = useStore("items")
    const [filteredItems, setFilteredItems] = useState([])

    useEffect(() => {
        const regExp = new RegExp(filter, "i")
        const filteredItems = Object.values(items).reduce((acc, item) => {
            if (item.name.match(regExp)) return [...acc, item]
            return acc
        }, [])

        setFilteredItems(filteredItems)
    }, [items, filter])

    useEffect(() => {
        dispatchItems({ action: "set", payload: new Item({ id: "1", name: "Sopa", inStock: false }) })
        dispatchItems({ action: "set", payload: new Item({ id: "2", name: "Pollo", inStock: false }) })
    }, [dispatchItems])

    const updateStock = useCallback(event => {
        const item = items[event.currentTarget.id]
        dispatchItems({ action: "set", payload: new Item({ ...item, inStock: !item.inStock }) })
    }, [items, dispatchItems])

    return { items: filteredItems, updateStock }
}

export default useLogic