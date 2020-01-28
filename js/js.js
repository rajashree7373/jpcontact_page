$(document).ready(function(){

 $('.overLi1').on('mouseover', function () {
 	 $(".hoverLine1").fadeIn("slow");
     $(".hoverLine1").css("display", "initial");
     
});
 $('.overLi1').on('mouseout', function () {
 	  $(".hoverLine1").fadeOut("slow");
     $(".hoverLine1").css("display", "none");
   
});


 $('.overLi2').on('mouseover', function () {
 	$(".hoverLine2").fadeIn("slow");
     $(".hoverLine2").css("display", "initial");
});
 $('.overLi2').on('mouseout', function () {
     $(".hoverLine2").css("display", "none");
});3



 $('.overLi3').on('mouseover', function () {
 	$(".hoverLine3").fadeIn("slow");
     $(".hoverLine3").css("display", "initial");
});
 $('.overLi3').on('mouseout', function () {
     $(".hoverLine3").css("display", "none");
});


  $('.overLi4').on('mouseover', function () {
  	$(".hoverLine4").fadeIn("slow");
     $(".hoverLine4").css("display", "initial");
});
 $('.overLi4').on('mouseout', function () {
     $(".hoverLine4").css("display", "none");
});



  $('.overLi5').on('mouseover', function () {
  	$(".hoverLine5").fadeIn("slow");
     $(".hoverLine5").css("display", "initial");
});
 $('.overLi5').on('mouseout', function () {
     $(".hoverLine5").css("display", "none");
});


  $('.overLi6').on('mouseover', function () {
  	$(".hoverLine6").fadeIn("slow");
     $(".hoverLine6").css("display", "initial");
});
 $('.overLi6').on('mouseout', function () {
     $(".hoverLine6").css("display", "none");
});


});




// **********Banner Slider  **************



// *********end banner slider  *******










var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});




















