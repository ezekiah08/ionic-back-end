const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required:[true, 'Please enter an email address']
    },
    firstName:{
        type: String,
        required:[true, 'Please enter a first name']
    },
    lastName:{
        type: String,
        required:[true, 'Please enter a last name']
    },
    password:{
        type: String,
        required:[true, 'Please enter a password']
    },
    service:{
        type: String,
        required:[true, 'Please enter a Accountant']
    },
    bio:{
        type: String,
        required:[true, 'Please enter a bio']
    },
    pic:{
        type: String,
        required:[true, 'Please enter a pic URL']
    },
    isServiceProvider: {
        type: Boolean,
        required: [true, 'Are you service provide?' ]
    }
})

module.exports = mongoose.model('User', UserSchema)