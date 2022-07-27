const {response} = require('express');
const { getApiProducts, getApiProductDetail, getApiDescription, getApiCategories } = require('../helpers/getApi');

const getProducts = (req, res = response) => {

    const nameProduct = req.query.q;

    getApiProducts(nameProduct, (response) => {
        res.json(response)
    })
}

const getProduct = (req, res = response) => {
    const id = req.params.id;

    getApiProductDetail(id, (item) => {
        getApiDescription(id, description => {
            getApiCategories(item.category_id, categories => {
                res.json({
                    item: {...item, description},
                    categories
                })
            })
        })
    })
}

module.exports = {
    getProducts,
    getProduct
}