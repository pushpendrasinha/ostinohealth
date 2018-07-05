
var adminService = require("../services/commonService");
module.exports = {
    login: async (req, res) => {
        var email = req.body.email;
        var password = req.body.password;
        var result = await adminService.login(email, password).catch((err) => {
            console.log("err is " + err);
        });
        console.log("result in controller " + JSON.stringify(result));
        res.status(200).send(result);
    },
    register: async (req, res) => {
        var data = req.body;
        var result = await adminService.register(data).catch((err) => {
            console.log("err is " + err);
        });
        console.log("result in controller " + JSON.stringify(result));
        res.status(200).send(result);
    },

}