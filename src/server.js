import Hapi from 'hapi';

const server = new Hapi.Server({
    port: 3333,
    host: 'localhost'
});

server.route({
    method: 'GET',
    path: '/hello',
    handler: (request, reply) => {
        reply('Hello World!');
    }
})

server.start(err => {
    if(err) {
        console.log('Error was handled!');
        console.log(err);
    }

    console.log(`Server started at ${server.info.uri}`);
});