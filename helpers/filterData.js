
const filterProducts = (data) => {

    const getCategories = () => {
        let categories = []
        data.filters[0].values.forEach(value => {
            value.path_from_root.forEach(categorie => {
                categories.push(categorie);
            })
        });
        return categories;
    }

    const filterItems = () => {
        const products = data.results.map( product => ({
            id: product.id,
            title: product.title,
            price: (product.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
            picture: product.thumbnail,
            condition: product.condition,
            free_shipping: product.shipping.free_shipping,
            city: product.address.city_name
        }));
        return products;
    }

    const result = {
        autor: {
            name: 'angel',
            lastname: 'hernandez'
        },
        categories: getCategories(),
        items: filterItems()
    }

    return result;
}

const filterProductDetail = (data) => {
    
    return product = {
        id: data.id,
        category_id: data.category_id,
        title: data.title,
        price: {
            currency: data.currency_id,
            amount: (data.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        },
        picture: data.pictures[0].url,
        condition: data.condition,
        free_shipping: data.shipping.free_shipping,
        sold_quantity: data.sold_quantity,
        description: ''
    }

}


module.exports = {
    filterProducts,
    filterProductDetail
}