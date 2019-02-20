$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
      $("ul#webpage").prepend("<li>why hello?</li>");
        $('li').click(function(){
           alert ('hi');
   });
});
$("button#goodbye").click(function() {
  $("ul#user").prepend("<li>goodbye</li>");
    $("ul#webpage").prepend("<li>Why say goodbye?</li>");
      $('li').css('background-color','green');
});

$("button#stop").click(function(){
  $("ul#user").prepend("<li>stop copying me!</li>");
    $("ul#webpage").prepend("<li>why should i stop copying you?</li>");
     $('li').css('background-color','blue');
});

$("ul#user").children("li").first().click(function(){
    $(this).remove();
});
});
