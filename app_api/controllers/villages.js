var mongoose =  require('mongoose');
var Vill = mongoose.model('Village');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.villagesCreate = function (req, res) {
    Vill.create({
        Aldea: req.body.Aldea,
        Oro: req.body.Oro,
        PctOro: req.body.PctOro,
        Elixir: req.body.Elixir,
        PctElixir:req.body.PctElixir, 
        Oscuro: req.body.Oscuro,
        PctOscuro: req.body.PctOscuro, 
        Constructores: req.body.Constructores,
        Copas: req.body.Copas,
        Gemas: req.body.Gemas, 
        Status: req.body.Status
    }, function(err,village){
        if (err){
            sendJsonResponse(res,400,err);
        } else{
            sendJsonResponse(res,200,village);
        }
    });
}

/* module.exports.village = function (req, res) {
    sendJsonResponse(res,200, {"status":"success"});
};*/

module.exports.villagesList = function (req, res) {
    Vill
        .find({})
        .exec(function(err, village) {
            if (!village || village==""){
                sendJsonResponse(res, 404, {
                    "message": "Ninguna aldea encontrada"
                });
                return;
            } else if(err){
                sendJsonResponse(res,404,err);
                return;
            }
            sendJsonResponse(res,200, village);        
        });
};



module.exports.villagesReadOne = function (req, res) {
  if (req.params && req.params.villageid) {    
    Vill
        .find({Aldea: req.params.villageid})
        .exec(function(err, village) {
            if (!village || village==""){
                sendJsonResponse(res, 404, {
                    "message": "Aldea no encontrada"
                });
                return;
            } else if(err){
                sendJsonResponse(res,404,err);
                return;
            }
            sendJsonResponse(res,200, village);        
        });
  } else {
      sendJsonResponse(res,404,{
          "message":"Ninguna aldea en la request"
      });
  }
};

module.exports.villagesUpdateOne = function (req, res) {
   if (req.params && req.params.villageid) {    
    Vill
        .findOne({Aldea: req.params.villageid})
        .exec(function(err, village) {
            if (!village || village==""){
                sendJsonResponse(res, 404, {
                    "message": "Aldea no encontrada"
                });
                return;
            } else if(err){
                sendJsonResponse(res,404,err);
                return;
            }
            village.Aldea=req.body.Aldea;
            village.Oro=req.body.Oro;
            village.PctOro= req.body.PctOro;
            village.Elixir= req.body.Elixir;
            village.PctElixir=req.body.PctElixir; 
            village.Oscuro= req.body.Oscuro;
            village.PctOscuro= req.body.PctOscuro; 
            village.Constructores= req.body.Constructores;
            village.Copas= req.body.Copas;
            village.Gemas= req.body.Gemas; 
            village.Status= req.body.Status;
            village.save(function(err,village){
                if(err){
                    sendJsonResponse(res,404,err);
                } else {
                    sendJsonResponse(res,200,village);
                }   
            });
        });
  } else {
      sendJsonResponse(res,404,{
          "message":"Ninguna aldea en la request"
      });
  }   
};

module.exports.villagesDeleteOne = function (req, res) {
       if (req.params && req.params.villageid) {    
    Vill
        .findOne({Aldea: req.params.villageid})
        .exec(function(err, village) {
            if (!village || village==""){
                sendJsonResponse(res, 404, {
                    "message": "Aldea no encontrada"
                });
                return;
            } else if(err){
                sendJsonResponse(res,404,err);
                return;
            }
          Vill.remove(function(err, village){
              if (err){
                  sendJsonResponse(res,404,err);
              } else {
                  sendJsonResponse(res, 200, {"status":"success"});
              }
          })  
        });
  } else {
      sendJsonResponse(res,404,{
          "message":"Ninguna aldea en la request"
      });
  }   
};