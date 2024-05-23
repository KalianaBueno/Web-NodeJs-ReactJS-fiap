import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Tasks } from "./entity/Tasks"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "fiap-atividade-buenokaliana.k.aivencloud.com",
    port: 22112,
    username: "avnadmin",
    password: "AVNS_uSwYYJJ4zb0e3WHvwQx",
    database: "defaultdb",
    synchronize: true,
    logging: false,
    entities: [User, Tasks],
    migrations: [],
    subscribers: [],
    ssl: {
        rejectUnauthorized: false,
    },
})
