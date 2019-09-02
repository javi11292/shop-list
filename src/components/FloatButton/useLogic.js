import { useCallback } from "react"
import { useStore } from "eztore"
import useStyles from "./useStyles"

function useLogic() {
    const [filter, setFilter] = useStore("filter")

    const toggleBuying = useCallback(() => {
        setFilter({ isBuying: !filter.isBuying })
    }, [setFilter, filter])

    const classes = useStyles({ isBuying: filter.isBuying })

    return { toggleBuying, isBuying: filter.isBuying, classes }
}

export default useLogic