let mongoose = require('mongoose');

const server = 'ds117145.mlab.com:17145'
const database = 'apidb'
const user = 'hammaam'
const password = 'root@3.5'
const uri = 'mongodb://hammaam:root1234@ds117145.mlab.com:17145/apidb'

mongoose.connect(uri,{useNewUrlParser:true})
.then(() => console.log(`Conneted to MongoDB...`))
.catch(err => console.log('Could not connetc to MongoDB'));

let customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Customer',customerSchema);