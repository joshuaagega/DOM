$(document).ready(function() {
  $("button#hello").click(function() {
   $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");

$("ul#user").children("li").first().click(function() {
    alert('hi');
});
  $("ul#webpage").children("li").first().click(function() {
    alert('hi');
});

$("ul#user").children("li").first().click(function() {
  $(this).remove();
});
  $("ul#webpage").children("li").first().click(function() {
    $(this).remove();
});
 $('li').css('background-color','blue');
});
$("button#goodbye").click(function() {
  $("ul#user").prepend("<li>goodbye</li>");
    $("ul#webpage").prepend("<li>Why say goodbye?</li>");
      $('li').click(function(){
          alert ('hi');
});
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
