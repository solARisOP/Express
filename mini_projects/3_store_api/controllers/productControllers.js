import { Product } from "../models/productModels.js"

const getAllproductsStatic = async (req, res)=>{
    const products = await Product.find({price : {$gte : 100}})
    res.json({products, nbHits : products.length});
}

const getAllproducts = async (req, res)=>{
    const {featured, company, name, sort, fields, numericFilters} = req.query
    const queryObject = {}
    if(featured) queryObject.featured = featured==='true' ? true : false;
    if(company) queryObject.company = company;
    if(name) queryObject.name = {$regex : name, $options : "i"};
    if(numericFilters)
    {
        const op = {
            '<' : '$lt',
            '<=' : '$lte',
            '=' : '$eq',
            '>' : '$gt',
            '>=' : '$gte',
        }
        const regEx = /\b(<|<=|=|>=|>)\b/g
        let filters = numericFilters.replace(regEx, match=>`-${op[match]}-`)
        
        const options = ['price', 'rating']
        filters.split(',').forEach(element => {
            const [field, operator, value] = element.split('-');
            if(options.includes(field))
            {
                queryObject[field] = {[operator] : Number(value)}
            }
        });
    }
    
    let result = Product.find(queryObject)
    if(sort)
    {
        let sortList = sort.split(',').join(' ');
        result = result.sort(sortList)
    }
    else{
        result = result.sort('createdAt')
    }
    if(fields)
    {
        let fieldsList = fields.split(',').join(' ');
        result = result.select(fieldsList)
    }

    let limit = req.query.limit || 10
    let page =  req.query.page || 1;
    let skip = (page-1)*limit
    result.skip(skip).limit(limit)

    const products = await result; 
    res.json({products, nbHits : products.length});
}


export {getAllproducts, getAllproductsStatic}