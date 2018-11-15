// where the application is "connected" to the database
const mongoose = require('mongoose')
if (process.env.NODE_ENV == "production") {
    mongoose.connect(process.env.MLAB_URL)
} else {
    mongoose.connect('mongodb://localhost/praxis', { useNewUrlParser: true })//my database... added { useNewUrlParser: true } after deprecation warning
}
mongoose.Promise = Promise
mongoose.set("debug", true);
module.exports = mongoose