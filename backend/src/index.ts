import colors from 'colors'
import server from './server'
import 'dotenv/config';


const port  = process.env.PORT || "4000"

server.listen(port, () => {
    console.log( colors.blue.bold( `Servidor Funcionando en el puerto: ${port} `) )
})
