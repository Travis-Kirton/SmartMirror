app.factory('forecast', ['$http', function($http) {

  var URL = 'http://api.openweathermap.org/data/2.5/weather';

  var request = {
    method: 'GET',
    url: URL,
    params: {
       id: '2644668',
      units:'metric',
      appid: '803105b5fc049541ef541d54b1bd35fb'
    }
  };

  return $http(request)
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
