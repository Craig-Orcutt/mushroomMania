'use strict';

angular.module('shroom').factory('fbCall', function ($q, $http) {
    let getMushrooms = () => {
        return $q(function (resolve, reject) {
            $http
                .get("https://firstproject-4622a.firebaseio.com/mushrooms.json")
                .then((fungi) => {
                    resolve(fungi.data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };

    return { getMushrooms };

});