app.factory('news', ['$http', function($http) {

  var URL = 'https://newsapi.org/v1/articles';

  var request = {
    method: 'GET',
    url: URL,
    params: {
       source: 'bbc-news',
      sortBy: 'top',
      apiKey:'7b61b18b3bc34ebebef8bd1cbe0c30a7'
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
