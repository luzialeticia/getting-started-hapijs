import Hapi from 'hapi';

const server = new Hapi.Server({
    host: 'localhost',
    port: 3000
});

server.route({
    method: 'GET',
    path: '/hello',
    handler: (request, h) => {
        return 'Hello World!';
    }
})

server.start(err => {
    if(err) {
        console.log('Error was handled!');
        console.log(err);
    }

    console.log(`Server started at ${server.info.uri}`);
});