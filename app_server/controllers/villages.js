var request = require("request");
var apiOptions={
    server: "http://localhost:8080"
};
if (process.env.NODE_ENV=='production'){
    apiOptions.server="http://batrako.no-ip.org:3000";
};

var renderHomepage=function(req, res){
    res.render('index', { 
        title: 'Lista de Aldeas'
});    
}
/* GET 'homelist' page */
module.exports.homelist = function(req, res){
    var requestOptions, path;
    path="/api/villages";
    requestOptions={
        url: apiOptions.server+path,
        method: "GET",
        json: {}
    };
    request(
        requestOptions,
        function(err, response,body){
            if (err) {
                console.log(err);
            } else if (response.statusCode === 200) {
                renderHomepage(req,res,body);
            } else {
                console.log(response.statusCode);
            }
        }
        );
};

/* GET 'homelist' page */
module.exports.villageInfo = function(req, res){
    renderHomepage(req,res);
    //res.render('index', { title: 'Administración de Aldea' });
};
