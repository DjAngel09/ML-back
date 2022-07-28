const { response } = require('express');
const { getApiProducts, getApiProductDetail, getApiDescription, getApiCategories } = require('../helpers/getApi');

const getProducts = async (req, res = response) => {

    const nameProduct = req.query.q;

    try {

        res.json(await getApiProducts(nameProduct));

    } catch (error) {
        res.status(404).send({
            statusCode: 404,
            message: 'Product not found',
            body: error
        });
    }

}

const getProduct = async (req, res = response) => {
    const id = req.params.id;

    try {
        const product = await getApiProductDetail(id);
        const description = await getApiDescription(id);
        const categories = await getApiCategories(product.category_id);

        res.json({
            item: { ...product, description },
            categories
        });        
    } catch (error) {

        res.status(404).send({
            statusCode: 404,
            message: 'Product not found',
            body: error
        });

    }

}

module.exports = {
    getProducts,
    getProduct
}