
var userService = require("../services/user");
module.exports = {
    login: async (req, res) => {
        var email = req.body.email;
        var password = req.body.password;
        var result = await userService.login(email, password).catch((err) => {
            console.log("err is " + err);
        });
        console.log("result in controller " + JSON.stringify(result));
        res.status(200).send(result);
    },
    register: async (req, res) => {
        var data = req.body;
        var result = await userService.register(data).catch((err) => {
            console.log("err is " + err);
        });
        console.log("result in controller " + JSON.stringify(result));
        res.status(200).send(result);
    },
    changePassword: async (req, res) => {
var credentials = req.body.credentials;
var userId = req.userId;
var result =  await userService.changePassword(userId, credentials);
        res.status(200).send(result);
    },

    editProfile: async (req, res) => {
        var data = req.body.data;
        var userId = req.userId;
        var result =  await userService.editProfile(userId, data);
        res.status(200).send(result);

    }


}