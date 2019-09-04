const {gql} = require('apollo-server');

//schema
const typeDefs = gql`
    extend type Query {
        category(id:ID!):category
        categories:[category]
    }

    extend type product{
        category:category
    }
    
    type category {
        id:ID!
        name:String!
        products:[product]
    }`


const resolvers = {
    Query: {
        category(_, {id}) {
            return {
                id, 
                name:'Homeware',
                products:[
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
        },
        categories(){
            return [
                {
                    id:Math.round(Math.random()*100000),
                    name:'Homeware',
                    products:[
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
                },
                {
                    id:Math.round(Math.random()*100000),
                    name:'Room',
                    products:[
                    {
                        id:Math.round(Math.random()*100000),
                        name:'Lamp1',
                        price:10000
                    },
                    {
                        id:Math.round(Math.random()*100000),
                        name:'sofa1',
                        price:1000
                    }
                    ]
                }
            ]
        }
    },

    product: {
        category() {
            return{
                id:Math.round(Math.random()*100000),
                name:'Homeware'
            }
        }
    }
}

module.exports = {
    typeDefs,
    resolvers
}