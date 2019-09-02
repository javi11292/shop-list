import { useCallback } from "react"
import { useStore } from "eztore"

function useLogic() {
    const [filter, setFilter] = useStore("filter")
    const [isOpen, toggleOpen] = useStore("isDrawerOpen")

    const toggleBuying = useCallback(() => {
        toggleOpen()
        setFilter({ isBuying: !filter.isBuying })
    }, [setFilter, toggleOpen, filter])

    return { toggleBuying, isOpen, toggleOpen, isBuying: filter.isBuying }
}

export default useLogic