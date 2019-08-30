import { useEffect } from "react"
import { useStore } from "eztore"
import database from "libraries/database"

function useLogic() {
    const dispatchItems = useStore("items", true)

    useEffect(() => {
        async function initialize() {
            const items = await database.items.toArray()
            dispatchItems({ action: "set", payload: items })
        }

        initialize()
    }, [dispatchItems])
}

export default useLogic