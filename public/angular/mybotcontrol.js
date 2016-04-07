
var villageListCtrl= function($scope,villageData,$http,$interval){
    villageData
        .success(function(data) {
            $scope.data = { dataVillages: data };
        })
        .error(function (e) {
        console.log(e);
        });
        
    $scope.start = function(aldea){
        bootbox.confirm("Se va  enviar orden al Robot para <b> INICIAR </b> la Aldea <b><font color=green>"+aldea+"</font></b> ¿ Estás Seguro ?", function(result) {
                if (result==true) {
                    sendPushBulletAction(aldea,'RESUME',$http);    
                }
        }); 
    };
    
    $scope.pause = function(aldea){
         bootbox.confirm("Se va a enviar orden al Robot para poner en <b> PAUSA </b> la Aldea <b><font color=green>"+aldea+"</font></b> ¿ Estás Seguro ?", function(result) {
                if (result==true) {
                    sendPushBulletAction(aldea,'PAUSE',$http);    
                }
        }); 
    };
    
    $scope.restart = function(aldea){
        bootbox.confirm("Se va a enviar orden al Robot para <b> PARAR y ARRANCAR de cero</b> la Aldea <b><font color=green>"+aldea+"</font></b> ¿ Estás Seguro ?", function(result) {
                if (result==true) {
                    sendPushBulletAction(aldea,'RESTART',$http);    
                }
        }); 
    };
    
    
    $scope.reload = function () {
        $http.get('/api/villages').
            success(function (data) {
                $scope.data.dataVillages = data;
            });
    };
    
    $scope.reload();
    
    $interval($scope.reload, 20000);
    
};

var villageData=function($http){
    return $http.get('/api/villages');

};

function sendPushBulletAction(aldea, accion,$http){
    var url='/api/pushbullet/'+aldea+'/'+accion;
        console.log(url);
        $http.get(url)
            .success(function(data) {
                bootbox.alert("Orden enviada correctamente. Puede tardar varios segundos en ejecutarse");
            })
            .error(function(data){
                bootbox.alert("Error al enviar la orden al Robot:" + data);
            });    
}


angular
    .module('mybotcontrol',[])
    .controller('villageListCtrl',villageListCtrl)
    .service('villageData',villageData);