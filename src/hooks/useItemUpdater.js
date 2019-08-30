import { useCallback } from "react"
import { useStore } from "eztore"
import database from "libraries/database"

function useLogic() {
    const dispatchItems = useStore("items", true)

    const addItem = useCallback(item => {
        database.items.put(item)
        dispatchItems({ action: "set", payload: item })
    }, [dispatchItems])

    return { addItem }
}

export default useLogic