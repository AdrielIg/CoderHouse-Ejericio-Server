const Axios = require('axios');

const URL = 'http://localhost:8080';

async function getProducts() {
  try {
    const response = await Axios.get(`${URL}/api/productos/listar`)
    console.log(response.data)
  } catch (err) {
    console.error(err.response)
  }
}

async function getProduct(id) {
  try {
    const response = await Axios.get(`${URL}/api/productos/listar/${id}`)
    console.log(response.data)
  } catch (err) {
    console.error(err.response)
  }
}

async function deleteProduct(id) {
  try {
    const response = await Axios.delete(`${URL}/api/productos/borrar/${id}`)
    console.log(response.data)
  } catch (err) {
    console.error(err.response)
  }
}


getProducts()
getProduct('6142a5cc10795703d4590bcc')
deleteProduct('6147896625fba035a49d2ff8')
