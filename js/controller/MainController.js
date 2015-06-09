app.controller('mainCtr', function($scope,$http) {
    $scope.src = "http://getui.16mb.com/assets/img/bg.jpg";
    $scope.text=function(){
        return $scope.src;
    }
    $scope.count = 0;
    $scope.names=[
        {name:'Jani',total:16},
        {name:'Hege',total:222},
        {name:'Kai',total:656}
    ];
    $http.get('http://www.w3schools.com/angular/customers.php').
        success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.testdata=data.records;

        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            if(status==0){
                alert("SERVER ERROR");
            }
        });
});