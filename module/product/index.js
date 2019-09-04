const {gql} = require('apollo-server');

//schema
const typeDefs = gql`
    extend type Query {
        product(id:ID!):product
        products:[product]
    }

    type product {
        id:ID!
        name:String!
        price:Int!
    }`

const resolvers = {
    Query: {
        product(_, {id}) {
            return {
                id, 
                name:'Lamp',
                price:1000
            }
        },
        products(){
            return [
                {
                    id:Math.round(Math.random()*100000),
                    name:'Lamp',
                    price:10000
                },
                {
                    id:Math.round(Math.random()*100000),
                    name:'sofa',
                    price:1000
                }
            ]
        }
    }
}

module.exports = {
    typeDefs,
    resolvers
}