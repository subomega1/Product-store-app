import mongoose from 'mongoose'

export const coonectToDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MOGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch(error) {
        console.error(`Error : ${error.message}`)
        process.exit(1);
       }


}