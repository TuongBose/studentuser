import mongoose from 'mongoose'
import { print, OutputType } from '../helpers/print.js'
import Exception from '../exceptions/Exception.js'

async function connect() {
  try {
    let connection = await mongoose.connect(process.env.MONGODB_URI)
    print('Connected to MongoDB',OutputType.SUCCESS)
  } catch (error) {
    const {code} = error
    if(code === 8000) {
      throw new Exception(Exception.WRONG_DB_USERNAME_PASSWORD)
    } else if(code === 'ENOTFOUND') {
      throw new Exception(Exception.WRONG_CONNECTION_STRING)
    }
    throw new Exception(Exception.CANNOT_CONNECT_MONGODB)
  }
}

export default connect