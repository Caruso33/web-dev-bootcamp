$('ul').on('click', 'li', function(){
  $(this).toggleClass('completed');
});
$('ul').on('click', 'span', function (event){
  //stop event bubbling
  event.stopPropagation();
  $(this).parent().fadeOut(500,
  function () {
    $(this).remove();
  });
});
$('input[type="text"]').keypress(function(event){
  if(event.which === 13){ //13 is ENTER
    var todoText = $(this).val();
    $('ul').append('<li><span><i class="fa fa-trash"></i></span>'+todoText+'</li>'
    );
    $(this).val('');
  }
});

$(".fa-plus").click(function(){
	$("input").slideToggle(500)
});
