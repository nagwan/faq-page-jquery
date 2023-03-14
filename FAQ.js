$(".question").each(function(){
    $(this).click(function(){
      $(this).parent().children(".answer").fadeToggle("fast");
     $(".arrow").toggleClass("collapse");    
    });   
});