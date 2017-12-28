$(function() {
  $( "input[type='password']" ).each(function(index, element) {
    $( this ).attr("title", "length: "+$( this ).val().length.toString());
    $( this ).tooltip( {
        hide: { effect: "explode", duration: 400 }
      });
    $( this ).on('input', function() {
      $( this ).tooltip("open");
      $( this ).tooltip( {
        content: "length: "+$( this ).val().length.toString(),
      });
    });
  });
});
