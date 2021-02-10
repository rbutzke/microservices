const cote = require('cote')
const UserService = new cote.Responder({name:'UserService'})
const User = require('../models/User');

UserService.on('get',async(req,cb) => {
    cb(await User.get())
})