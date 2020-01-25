'use strict';

const Categories = require('../categories/categories.js');
describe('Categories Model', () => {
    let categories;
    beforEach(() => {
        categories = new Categories();
    })
        in ('can post() a new category', () => {
            let obj = { name: 'Test Category' };
            return categories.create(obj)
                .then(record => {
                    Object.keys(obj).forEach(key => {
                        expect(record[key]).toEqual(obj[key]);
                    });
                })
                .catch(e => console.error('err', e));
        });
    it('can get () a category', () => {
        let obj = { name: 'Test Category' };
        return categories.create(obj)
            .then(record => {
                return categories.get(record._id)
                    .then(category => {
                        Object.keys(obj).forEach(key => {
                            expect(category[0][key]).toEqual(obj[key]);
                        })

                    })
            })
    })
    it('can update() a category', () => {
        let obj = {
            name: 'Test Category'
        }
        return categories.create(obj)
            .then(record => {
                record.name = 'new Category'
                categories.update(record._id, record)
                categories.get(record._id)
                    .then(category => {
                        Object.keys(obj).forEach(key => {
                            expect(category[0][key]).toEqual(obj[key])
                        })
                    })
            })
    })
    it('can delete() a category', () => {
        let obj = { name: 'Test Category' };
        return categories.create(obj)
            .then(record => {
                categories.delete(record)
                    .then(category => {
                        expect(category).toBeUndefined()
                    })
            })
    })
});