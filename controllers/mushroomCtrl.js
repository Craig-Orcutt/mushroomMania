"use strict";

angular
    .module("shroom")
    .controller("mushroomCtrl", function ($scope, fbCall) {
        // console.log("the id", $routeParams.name);

        // $scope.test = "Hello C23";

        fbCall.getMushrooms().then(mushData => {
            let mushDataData = mushData['mushrooms'];
            $scope.mushroomArray = [];
            console.log(mushDataData);
            for (let mushrooms in mushDataData){
                $scope.mushroomArray.push(mushDataData[mushrooms]);
            }
            console.log('mushrooms', $scope.mushroomArray);
            
        });
    });