const http = require('axios');

class User {
    async get(){
        const res = await http.get(url:'http://localhost:3000/user')
        return res.data;
    }
}

module.exports = new User();