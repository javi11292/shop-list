function itemsReducer(state, value) {
    const { action, payload } = value
    switch (action) {
        case "set": {
            if (payload instanceof Array) {
                const items = payload.reduce((acc, item) => {
                    return { ...acc, [item.id]: item }
                }, state)
                return items
            } else return { ...state, [payload.id]: payload }
        }
        case "unset": {
            const { [payload.id]: deleted, ...updatedState } = state
            return updatedState
        }
        default:
            return state
    }
}

export default {
    items: {
        state: {},
        reducer: itemsReducer,
    },
    filter: {
        state: { name: "" },
        reducer: (state, value) => ({ ...state, ...value })
    },
}