
angular.module('photoGallery.controllers', [])

.controller('about', function($scope) {
    $scope.name="nihao"
})

angular.module('photoGallery.list', [])

.controller('list', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
})