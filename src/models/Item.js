function createItem({ name }) {
    return {
        id: name.toLowerCase(),
        name,
        inStock: false,
    }
}

export default createItem