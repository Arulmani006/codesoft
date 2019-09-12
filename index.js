const {ApolloServer} =require('apollo-server');

const server = new ApolloServer({
    modules:[
        require('./module/product'),
        require('./module/product1')
    ]
})

server.listen().then(({url}) => console.log(`server started at ${url}`))