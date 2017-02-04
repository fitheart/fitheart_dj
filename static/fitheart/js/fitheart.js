/**
 * Created by bichkhe on 7/2/2016.
 */

var app = angular.module('fitheart', ['']);

 app.controller("FitHeartController", function ($scope) {
     $scope.helloTo = {};
     $scope.helloTo.title = "AngularJS";
     $scope.firstname = "Phung";
     $scope.lastname = "Tuan";
 });
