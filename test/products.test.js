const request = require('supertest');
const app = require('../src');


const searchProduct = 'Ipad Pro';
const id = 'MLA1130780887'

describe('Testing for product mercadolibre', () => {

    test('should get products', async () => {
        const response = await request(app).get(`/api/items?q=:${searchProduct}`).send();
        expect(response.status).toBe(200);
        expect(response._body.items).toBeTruthy();
    });

    test('should get product', async () => {
        const response = await request(app).get(`/api/items/${id}`).send();
        expect(response.status).toBe(200);
        expect(response._body.item).toBeTruthy();
    });

})