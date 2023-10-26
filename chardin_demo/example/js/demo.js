(function() {
  $(function() {
    $('body').chardinJs();
    $('.jumbotron img').animate({
      height: 250
    }, 600, function() {
      return ($('body').data('chardinJs')).toggle();
    });
    $('a[data-toggle="chardinjs"]').on('click', function(e) {
      e.preventDefault();
      if ($('.jumbotron img').is(':visible')) {
        return $('.jumbotron img').animate({
          height: 0
        }, 600, function() {
          return ($('body').data('chardinJs')).toggle();
        });
      } else {
        return $('.jumbotron img').animate({
          height: 250
        }, 600, function() {
          return ($('body').data('chardinJs')).toggle();
        });
      }
    });
  });

}).call(this);
