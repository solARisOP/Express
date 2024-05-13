import { Product } from "../models/productModels.js"

const getAllproductsStatic = async (req, res)=>{
    const products = await Product.find({})
    .sort('-price -name')
    .select('name price')
    .limit(2)
    .skip(0)
    res.json({products, nbHits : products.length});
}

const getAllproducts = async (req, res)=>{
    const {featured, company, name, sort, fields} = req.query
    const queryObject = {}
    if(featured) queryObject.featured = featured==='true' ? true : false;
    if(company) queryObject.company = company;
    if(name) queryObject.name = {$regex : name, $options : "i"};
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