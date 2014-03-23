'use strict';

app.controller('MainCtrl', function ($scope) {
  $scope.entries = [
    {id: 1, name: 'get milk', completed: false},
    {id: 2, name: 'wash car', completed: false},
    {id: 3, name: 'feed baby', completed: false},
    {id: 4, name: 'go to sleep', completed: false}
  ];

  $scope.addItem = function (newItemName) {
    $scope.entries.push({
      id: $scope.entries.length,
      name: newItemName,
      completed: false
    });
  };
});
