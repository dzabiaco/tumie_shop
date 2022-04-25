const User = require('../models/User/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const oldUser = await User.find({$or: [{username: username}, {email:email}]});


    if(oldUser.length > 0) {
        return res.status(409).send({"msg": "User already exists"});
    }

    const newUser = {
        username,email,
        password: bcrypt.hashSync(password,8)
    };

    const user =  new User(newUser);
    await user.save();
    res.status(200).json({user});
}

exports.loginUser = async (req,res,next) => {
    const username = req.body.username;
    const password = req.body.password;

    const oldUser = await User.find({username:username});

    if(oldUser && (await bcrypt.compare(password, oldUser[0].password))){
        const token = jwt.sign(
            { user_id: oldUser._id, username },
            "helloWorld",
            {
                expiresIn: "8h",
            }
        );
        return res.status(200).send({token, user_id: oldUser[0]._id, username:oldUser[0].username});
    }

    if(!oldUser){
        return res.status(500).send({"msg": "This user do not exists"});
    }

}

exports.getUserInfo = async (req,res,next) => {
    const id = req.params.id;
    const user = await User.findOne({_id: id});
    res.send({...user._doc});
}

exports.updateUserInfo = async (req,res, next) => {
    const body = req.body;
    const id = req.body.user_id;
    const first_name = req.body.first_name;
    const last_name=  req.body.last_name;
    const username = req.body.username;
    const password = req.body.password;
    const mobile = req.body.mobile;
    const address = req.body.address;
    const email = req.body.email;

    const updatedData = {
        first_name,
        last_name,
        username,
        email,
        password: await bcrypt.hashSync(password,8),
        mobile,
        address
    };

    try {
        await User.findOneAndUpdate({_id: id}, updatedData, {
            new: true
        });
    }
    catch (e){
        res.status(500).send(e);
    }

    res.send({"msg": updatedData});
};

exports.saveOrder = async (req,res,next) => {
    const id = req.params.id;
    const user = await User.findOne({_id:id});
    user.orders.push(req.body);
    await user.save();
    res.status(200).send({"message": "Order was submitted"});
}

exports.getOrders = async (req,res,next) => {
    const id = req.params.id;
    const user = await User.findOne({_id:id}).select("orders");
    // const user_orders = user.orders;
    res.status(200).send(user);
}

exports.getOrderById = async (req, res, next) => {
    const user_id = req.params.id;
    const order_id = req.params.order;
    const user = await User.findById({_id:user_id}).select("orders");

    // const finded_order = user.find(order => order.order_id === order_id);
    // const result = finded_order.orders;
    res.status(200).send(user.orders);
}

