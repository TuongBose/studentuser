import {print, OutputType} from "../helpers/print.js";

export default class Exception extends Error {
    static WRONG_DB_USERNAME_PASSWORD="Wrong database's username or password"
    static WRONG_CONNECTION_STRING="Wrong server name or connection string"
    static CANNOT_CONNECT_MONGODB = "Error connecting to MongoDB"
    constructor(message){
        super(message);
        print(message, OutputType.ERROR);
    }
}