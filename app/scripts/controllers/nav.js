'use strict';

app.controller('NavCtrl', function ($scope, $location) {

  $scope.aboutLink = function () {
    $location.url('/about/');
  };
  $scope.contactLink = function () {
    $location.url('/contact/');
  };
});
