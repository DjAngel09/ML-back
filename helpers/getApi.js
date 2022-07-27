const { default: axios } = require("axios");
const { filterProducts, filterProductDetail } = require("./filterData");

const url = 'https://api.mercadolibre.com/'


const getApiProducts = (nameProduct, callback) => {
    axios.get(`${url}sites/MLA/search?q=${nameProduct}`)
    .then(response => {
        callback(filterProducts(response.data))
    })
    .catch(error => {
        callback(error)
    });
}

const getApiProductDetail = (id, callback) => {
    axios.get(`${url}items/${id}`)
    .then(response => {
        callback(filterProductDetail(response.data))
    })
    .catch(error => {
        callback(error)
    })
}

const getApiDescription = (id, callback) => {
    axios.get(`${url}items/${id}/description`)
    .then(response => {
        callback(response.data.plain_text)
    })
    .catch(error => {
        callback(error)
    })
}

const getApiCategories = (id, callback) => {
    axios.get(`${url}categories/${id}`)
    .then(response => {
        callback(response.data.path_from_root)
    })
    .catch(error => {
        callback(error)
    })
}

module.exports = {
    getApiProducts,
    getApiProductDetail,
    getApiDescription,
    getApiCategories
}