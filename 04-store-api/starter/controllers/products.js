// controllers/products.js

const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({price: {$gt: 30}})
        .sort('price')
        .select('name price company'); // sort by price & select some fields
    res.status(200).json({ nbHits: products.length, products });
}

const getAllProducts = async (req, res) => {
    const { featured, company, name, sort, fields, numericFilters } = req.query; // find products by query & sort using numericFilters

    const queryObject = {};

    if (featured) {
        queryObject.featured = featured === 'true';
    }

    if (company) {
        queryObject.company = company;
    }

    if (name) {
        queryObject.name = { $regex: name, $options: 'i'};
    }

    if (numericFilters) {
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        };
        const regEx = /\b(<|>|>=|=|<=)\b/g;
        let filters = numericFilters.replace(
            regEx,
            (match) => `-${operatorMap[match]}-`
        );
        const options = ['price', 'rating'];
        filters = filters.split(',').forEach((item) => {
            const [field, operator, value] = item.split('-');
            if (options.includes(field)) {
                queryObject[field] = { [operator]: Number(value) };
            }
        });
    }
    console.log(queryObject);
    let result = Product.find(queryObject); // find products by query w/o sorting
    // sort
    if (sort) {
        const sortedList = sort.split(',').join(' ');
        result = result.sort(sortedList);
    } else {
        result = result.sort('createdAt');
    }
    // select some fields
    if (fields) {
        const fieldsList = fields.split(',').join(' ');
        result = result.select(fieldsList);
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit);

    const products = await result;
    res.status(200).json({ nbHits: products.length, products });
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}
