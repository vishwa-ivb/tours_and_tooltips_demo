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
        return $('.jumbotron img').animate({
          height: 250
        }, 600, function() {
          return ($('body').data('chardinJs')).toggle();
        });
    });
  });

}).call(this);
