var mongoose =  require('mongoose');
var Vill = mongoose.model('Village');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.villagesCreate = function (req, res) {
    sendJsonResponse(res,200, {"status":"success"});
};

module.exports.villagesList = function (req, res) {
    sendJsonResponse(res,200, {"status":"success"});
};

module.exports.villagesReadOne = function (req, res) {
    sendJsonResponse(res,200, {"status":"success"});
};

module.exports.villagesUpdateOne = function (req, res) {
    sendJsonResponse(res,200, {"status":"success"});
};

module.exports.villagesDeleteOne = function (req, res) {
    sendJsonResponse(res,200, {"status":"success"});
};