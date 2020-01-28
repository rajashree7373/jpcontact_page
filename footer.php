
<!--Footer-->
<footer>
	<div class="content-continer">
		<div class="col-md-8 col-lg-8">
			<p>Copyright by JP INFRA. All rights reserved.</p>
		</div>
		<div class="col-md-4 col-lg-4">
			<img src="img/fb.png" alt="fb">
			<img src="img/twitter.png" alt="twitter">
			<img src="img/youtube.png" alt="youtube">
			<img src="img/linkedin.png" alt="linkedin">
		</div>	
		<div class="clearfix"></div>
	</div>		

</footer>
 
<!---->





	

    <!-- Custom CSS -->
    <link rel="stylesheet" type="text/css" href="css/animate.css" />


	<!--External Javascript-->

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>


    <!-- My JavaScript -->
    <script src="js/jquery.js"></script>
    <script src="js/jquery-edit.js"></script>
    <script src="js/send.js"></script>

	<script src="js/viewportchecker.js"></script>
	
	<script src="js/js.js"></script>
  	<script src="js/wow.min.js"></script>

	<script type="text/javascript">
		// Carousel Auto-Cycle
		  $(document).ready(function() {
        if (document.querySelector('.carousel')){
          $('.carousel').carousel({
			        interval: 3000
			    })
        }
		  });
	</script>
	
	<script>
		$(document).ready(function () {
		  $(".gallery-img").click(function(){
			var t = $(this).attr("src");
			$(".modal-body").html("<img src='"+t+"' class='modal-img'>");
			$("#myModal").modal();
		  });
		});
		</script>
		
	<script src="js/aos.js"></script>

  <script>
    AOS.init({
      once: true,
    });

  </script>	
  
  <script>
      
    //   $('.stat-number').each(function () {
    //       var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
    //       $(this).prop('Counter', 0).animate({
    //           Counter: $(this).text()
    //       }, {
    //           duration: 2000,
    //           step: function (func) {
    //              $(this).text(parseFloat(func).toFixed(size));
    //           }
    //       });
    //     });
        
        
        
        
        var a = 0;
$(document).ready(function (){
if(document.querySelector('#counter')){
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
}
});
        
        
        
        
        
        
        
        
  </script>
</body>
</html>