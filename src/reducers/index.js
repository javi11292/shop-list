function itemsReducer(state, value) {
    const { action, payload } = value
    switch (action) {
        case "set": {
            return { ...state, [payload.id]: payload }
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
}