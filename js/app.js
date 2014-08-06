var compass = angular.module("compass",  ["ca-helpers"]);

angular.module("compass").controller("compass", function($scope) {

  $scope.angle = 0;
  $scope.roundedAngle = 0;

  var handleOrientationChange = function(e) {
    $scope.angle = e.webkitCompassHeading || e.alpha;
    $scope.roundedAngle = Math.round($scope.angle);
    $scope.apply();
  }

  window.addEventListener('deviceorientation', handleOrientationChange);

});
