/**
 * Created by bichkhe on 7/2/2016.
 */

var app = angular.module('fitheart', []);
app.config(function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
});
app.controller("FitHeartController", function ($scope, $http) {
    $scope.helloTo = {};
    $scope.helloTo.title = "AngularJS";
    $scope.firstname = "Phung";
    $scope.lastname = "Tuan";
    $scope.save = function ($modal, $id) {
        console.log("CLICKED SAVE!");
        $http({
            method: "POST",
            url: "/product_reviews/"
        }).then(function mySucces(response) {
            $scope.myWelcome = response.data;
        }, function myError(response) {
            $scope.myWelcome = response.statusText;
        });
    }
});
