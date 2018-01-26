angular.module('shroom', ['ngRoute'])
    .config($routeProvider => {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html',
                controller: 'mushroomCtrl'
            })
            .otherwise('/')
    })
    .controller('mushroomCtrl', function ($scope, $rootScope) {
        $scope.mushrooms = mushData.data.mushrooms;
    })