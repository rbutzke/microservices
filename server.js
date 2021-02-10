const polka = require('polka');
const { json } = require('@polka/parse');
const { response } = require('./util/response');
const cote = require('cote');
const client = new cote.Requester({name: 'Client'})
const PORT = 3100;

polka()
.use(json())
.get('/',(req,res) => {
    client.send(args:{type:'get'},(user) => {
        response(res,data:'Funcionando')
    })
})
.listen(PORT,err => {
    console.log(`Ativo em localhost: ${PORT}`)
})