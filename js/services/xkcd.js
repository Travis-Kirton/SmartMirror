app.factory('xkcd', ['$http', function($http) {

  return $http.get('https://xkcd.com/info.0.json')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
