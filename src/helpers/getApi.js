const { default: axios } = require("axios");
const { filterProducts, filterProductDetail } = require("./filterData");

const url = process.env.API_ML || "https://api.mercadolibre.com";

const getApiProducts = async (nameProduct) => {

    const resp = await axios.get(`${url}sites/MLA/search?q=${nameProduct}`);
    return filterProducts(resp.data);

}

const getApiProductDetail = async (id) => {

    const resp = await axios.get(`${url}items/${id}`);
    return filterProductDetail(resp.data);

}

const getApiDescription = async (id) => {

    const resp = await axios.get(`${url}items/${id}/description`);
    return resp.data.plain_text;
}

const getApiCategories = async (id, callback) => {
    const resp = await axios.get(`${url}categories/${id}`);
    return resp.data.path_from_root;
}

module.exports = {
    getApiProducts,
    getApiProductDetail,
    getApiDescription,
    getApiCategories
}