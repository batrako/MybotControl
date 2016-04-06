
var villageListCtrl= function($scope,villageData,$http,$interval){
    villageData
        .success(function(data) {
            $scope.data = { dataVillages: data };
        })
        .error(function (e) {
        console.log(e);
        });
        
    $scope.start = function(aldea){
        var url='/api/pushbullet/'+aldea+'/resume';
        console.log(url);
        $http.get(url)
            .success(function(data) {
                console.log(data);   
            })
            .error(function(data){
                console.log('Error:' + data);
            });
    };
    
    $scope.pause = function(aldea){
        sendPushBulletAction(aldea,'pause',$http);
    };
    
    $scope.reload = function () {
        $http.get('/api/villages').
            success(function (data) {
                $scope.data.dataVillages = data;
            });
        console.log("refresco");
    };
    
    $scope.reload();
    
    $interval($scope.reload, 5000);
    
};

var villageData=function($http){
    return $http.get('/api/villages');

};

function sendPushBulletAction(aldea, accion,$http){
    var url='/api/pushbullet/'+aldea+'/'+accion;
        console.log(url);
        $http.get(url)
            .success(function(data) {
                console.log(data);   
            })
            .error(function(data){
                console.log('Error:' + data);
            });    
}


angular
    .module('mybotcontrol',[])
    .controller('villageListCtrl',villageListCtrl)
    .service('villageData',villageData);