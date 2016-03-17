/* GET 'homelist' page */
module.exports.homelist = function(req, res){
res.render('index', { title: 'Lista de Aldeas' });
};

/* GET 'homelist' page */
module.exports.villageInfo = function(req, res){
res.render('index', { title: 'Administración de Aldea' });
};
