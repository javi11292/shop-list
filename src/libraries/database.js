import Dexie from "dexie"

const database = new Dexie("Database")
database.version(1).stores({
    items: "id",
    settings: "id",
})

export default database
