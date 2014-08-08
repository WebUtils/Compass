var compass = angular.module("compass",  ["ca-helpers", "appcache"]);

angular.module("compass").controller("compass", function($scope, appcache) {

  $scope.angle = 0;
  $scope.roundedAngle = 0;
  $scope.updateAvailable = false;

  appcache.checkForUpdate().then(function(applyUpdate) {
    $scope.applyUpdate = applyUpdate(); // Function call here not a bug
    $scope.updateAvailable = true;
  }, function() {
    console.log("No update found");
  });

  var handleOrientationChange = function(e) {
    $scope.angle = e.webkitCompassHeading ? (0-e.webkitCompassHeading) : e.alpha;
    $scope.roundedAngle = Math.abs(Math.round($scope.angle));
    $scope.apply();
  }

  window.addEventListener('deviceorientation', handleOrientationChange);

});
