class Item {
    constructor({ id, name, inStock }) {
        this.id = id || name.toLowerCase()
        this.name = name
        this.inStock = !!inStock
    }
}

export default Item