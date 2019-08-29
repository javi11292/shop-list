import { useEffect, useCallback } from "react"
import { useStore } from "eztore"
import Item from "models/Item"

function useLogic() {
    const [items, updateItems] = useStore("items")

    useEffect(() => {
        updateItems({ action: "set", payload: new Item({ id: "1", name: "Sopa", inStock: false }) })
        updateItems({ action: "set", payload: new Item({ id: "2", name: "Pollo", inStock: false }) })
    }, [updateItems])

    const updateStock = useCallback(event => {
        const item = items[event.currentTarget.id]
        updateItems({ action: "set", payload: new Item({ ...item, inStock: !item.inStock }) })
    }, [items, updateItems])

    return { items, updateStock }
}

export default useLogic