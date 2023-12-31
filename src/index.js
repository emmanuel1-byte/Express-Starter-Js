const http = require('http')
const app = require('../src/app')

const server = http.createServer(app)
const port = process.env.PORT || 9000
app.set('port', port)



//Check if port is already in use an if it is exit the process.
function onError(error) {
    if(error.code ==='EADDRINUSE'){
        console.clear()
        console.error(` port ${port} is already`)
        process.exit(1)
    }else{
        console.error('An error occurrred: ', error)
        process.exit(1)
    }
}


//Event listener that listens and handles the  error Event
server.on('error', onError)

//Database connection
async function databaseConnection() {
    try {
       // connection
        console.log('Database connection was established succesfully')
    } catch (err) {
        console.log('Connection was not established an error occured', err)
        process.exit(1)
    }
}


//Run the server
server.listen(port, (() => {
    console.clear()
    console.log(`Express API is running on port ${port}`)
    //db connection
}))
