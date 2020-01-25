'use strict';

const Products = require('../products/products.js')

describe('Products Model', () => {

    let products;

    beforeEach(() => {
        products = new Products();
    });

    it('can post() a new product', () => {
        let obj = { price: 77, weight: 250, quantity_in_stock: 22 };
        return products.create(obj)
            .then(record => {
                Object.keys(obj).forEach(key => {
                    expect(record[key]).toEqual(obj[key])
                })
            })
            .catch(err => {
                console.error('ops!', err);
            })
    })

    it('can get() a product', () => {
        let obj = { price: 77, weight: 250, quantity_in_stock: 22 };
        return products.create(obj)
            .then(record => {
                return products.get(record._id)
                    .then(product => {
                        Object.keys(obj).forEach(key => {
                            expect(product[0][key]).toEqual(obj[key])
                        })
                    })
            })
    })

    it('can update() a product', () => {
        let obj = { price: 77, weight: 250, quantity_in_stock: 22 };
        return products.create(obj)
            .then(record => {
                record.price = 50;
                products.update(record._id, record)
                products.get(record._id)
                    .then(product => {
                        Object.keys(obj).forEach(key => {
                            expect(product[0][key]).toEqual(obj[key])
                        })
                    })
            })
    })

    it('can delete() a product', () => {
        let obj = { price: 77, weight: 250, quantity_in_stock: 22 };
        return products.create(obj)
            .then(record => {
                products.delete(record)
                    .then(product => {
                        expect(product).toBeUndefined();
                    })
            })
    })
})