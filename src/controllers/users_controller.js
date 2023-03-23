const userCtrl = {};

const User = require('../models/users');
const Product = require('../models/product');
userCtrl.createUser = async (req, res) => {
    if(!req.body.name || !req.body.lastName || !req.body.email ){
        res.status(400)
        res.send('user information is necessary');
    }else{
        const usersResult = await User.find({email:req.body.email});
        if(usersResult.length !== 0){
            res.status(400)
            res.send('unable user registration user already exist')
        }else{
            const newUser = new User(req.body)
            const result = await newUser.save()
            res.json(result)
        }
    }
};
//
userCtrl.updateProducts = async (req,res) => {
    let userInfo = req.body.userInfo
    let productInfo = req.body.productInfo
    let message = !userInfo.name || !userInfo.updatedById ? 'all user information are necessary' : 'product id to update are necessary'
    if(!userInfo.name || !userInfo.updatedById || !productInfo._id){
        res.status(400)
        res.send(message)
    }else{
        let checkInfo = {
            user: await User.findById(userInfo.updatedById),
            product: await Product.findById(productInfo._id)
        }
        let message = !checkInfo.user ? 'user not registered in DB' : 'product not registered in DB'
        if(!checkInfo.user || !checkInfo.product){
            res.status(400)
            res.send(message)
        }else{
            const result = await Product.findByIdAndUpdate(checkInfo.product._id, {'$push':{updatedBy:{userName:checkInfo.user.name}}}, {new:true})
            res.status(200)
            res.json(result)
        } 
    }
};
module.exports = userCtrl;