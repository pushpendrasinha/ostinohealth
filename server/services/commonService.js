var mongoUtil = require("../util/mongo-util");
const {ObjectId} = require('mongodb');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var config = require('../config/config');
var collection = 'User';
// var secret = "med%ostino?R";

module.exports = {
    login: async (email, password) => {
        console.log("email " + email);
        var result = await mongoUtil.findRecord(collection, {email: email});
        console.log("result is " + JSON.stringify(result,null,2));
        if(result.length == 0) {
            return({error: "You are not authorized"})
        } else {
            var passwordIsValid = bcrypt.compareSync(password, result[0].password);
            if(passwordIsValid) {
                delete result[0].password;

                var token = jwt.sign({id : result[0]._id }, config.secret, {
                    expiresIn: 86400 // expires in 24 hours
                });
                return({token: token, user: result[0]});
            } else {
                return({token: null, error: "Invalid Password"})
            }
        }
    },
    register: async (data) => {
        data.password = bcrypt.hashSync(data.password, 8);
        var result = await mongoUtil.createRecord('User', data);
        return({msg : "success"});
}
}