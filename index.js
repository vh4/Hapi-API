const hapi = require('@hapi/hapi')
const webRoute = require('./route/web')

const init = async () =>{
    const server = hapi.Server(
        {
            port:3000,
            host:'localhost'
        }
    )

    server.route(webRoute)
    await server.start()

    console.log(`running in ${server.info.uri}`)
}

init()