import { useEffect, useCallback, useState } from "react"
import { useStore } from "eztore"
import useItemUpdater from "hooks/useItemUpdater"

function useLogic() {
    const [filter] = useStore("filter")
    const [items] = useStore("items")
    const [filteredItems, setFilteredItems] = useState([])
    const { addItem } = useItemUpdater()

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

    return { items: filteredItems, updateStock }
}

export default useLogic