const Product = require('../models/Shop/Product');

exports.getAllProducts = async (req, res, next) => {
    const posts = await Product.find();
    res.status(200).json(posts)
    // res.send({"msg": "posts fetched", posts: posts_arr});
}

exports.fetchOneProduct = async (req, res, next) => {
    const id = req.params.id;
    const product = await Product.findOne({_id: id});
    res.status(200).send(product);
}

exports.getProductsFromCategory = async (req,res, next) => {
    const category = req.query.category.toLowerCase();
    const all_products = await Product.find();
    if(category === 'all'){
        res.status(200).send({category_products});
    }
    const category_products = await Product.find({"category":category});
    res.status(200).send({category_products});
}

exports.getRelatedProducts = async (req, res, next) => {
    const category = req.query.category;
    const related_products = await Product.find({category}).limit(4);
    res.status(200).send(related_products);
}

exports.createProduct = async (req, res, next) => {
    const title = req.body.title;
    const image = req.body.image;
    const created_at = new Date();
    const price = req.body.price;
    const description = req.body.description;
    const category = req.body.category;
    const rating = req.body.rating;
    const size = req.body.size;
    const product_code = req.body.product_code;

    const product = new Product({
        title, image, created_at,price,description, category,rating,size, product_code
    });
    await product.save();
    res.send({"msg": product});
}

exports.deleteProduct = async (req, res, next) => {
    res.send({"msg": "posts created"});
}

exports.updateProduct = async (req, res, next) => {
    res.send({"msg": "posts created"});
}

exports.get_latest_products = async (req,res,next) => {
    const related_products = await Product.find().sort(`-created_at`).limit(8);
    res.status(200).send(related_products);
}