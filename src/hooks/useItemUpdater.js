import { useCallback } from "react"
import { useStore } from "eztore"

function useLogic() {
    const dispatchItems = useStore("items", true)

    const addItem = useCallback(item => {
        localStorage.setItem(item.id, JSON.stringify(item))
        dispatchItems({ action: "set", payload: item })
    }, [dispatchItems])

    return { addItem }
}

export default useLogic