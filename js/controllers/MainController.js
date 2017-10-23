app.controller('MainController', ['$scope', 'forecast','news', function($scope, forecast,news) {
  var setTimeout = setInterval(function(){
  forecast.success(function(data) {
    $scope.currDay = data;
  });

  news.success(function(data) {
    $scope.currNews = data;
  });

  $scope.date = new Date();

}, 1000);

}]);

app.filter('dateSuffix', function($filter) {
  var suffixes = ["th", "st", "nd", "rd"];
  return function(input) {
    var dtfilter = $filter('date')(input, 'EEEE \'the\' dd');
    var day = parseInt(dtfilter.slice(-2));
    var relevantDigits = (day < 30) ? day % 20 : day % 30;
    var suffix = (relevantDigits <= 3) ? suffixes[relevantDigits] : suffixes[0];
    return dtfilter+suffix;
  };
});



window.newsHeading = function($elem) {
    var top = parseInt($elem.css("top"));
    var temp = -1 * $('.newsHeading > li').height();
    if(top < temp) {
        top = $('.newsHeading').height()
        $elem.css("top", top);
    }
    $elem.animate({ top: (parseInt(top)-5) }, 650, function () {
      window.newsHeading($(this))
    });
}
$(document).ready(function() {
    var i = 0;
    $(".newsHeading > li").each(function () {
          $(this).css("top", i);
          i += 60;
          window.newsHeading($(this));
    });
});
