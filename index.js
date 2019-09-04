const {ApolloServer} =require('apollo-server');

const server = new ApolloServer({
    modules:[
        require('./modules/product'),
        require('./modules/product1')
    ]
})

server.listen().then(({url}) => console.log(`server started at ${url}`))