
const { buildSchema } = require('graphql');
const Products = require('../modelos/Products');

const schema = buildSchema(`
   type Query {
     products: [Product]
   },
   type Mutation {
     guardarProducto(title: String!, price: Int!, thumbnail: String): Product
   },
   type Product {
     _id: String
     title: String,
     price: Int
     thumbnail: String
   }
`)

const guardarProducto = async ({ title, price, thumbnail }) => {
  const product = await Products.addProduct(title, price, thumbnail)
  return product

}

const root = {
  products: Products.getProducts(),
  guardarProducto: guardarProducto
}

module.exports = { schema, root }