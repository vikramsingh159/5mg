const mongoose = require("mongoose")
mongoose.set('strictQuery', false)
const connection = mongoose.connect(process.env.MONGO_URL)

module.exports = {
    connection
}
