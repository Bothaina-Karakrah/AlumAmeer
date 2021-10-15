//add attribute for the menubar
var menubar = $("#menubar");
var sidenav = $("#sidenav");
sidenav.css("width", "0");
menubar.click(
  function(){
    if(sidenav.width() == 0){
      sidenav.css("width", "100%");
      sidenav.css("zIndex", "95");
      //menubar.css("color", "white");
    }else{
      sidenav.css("width", "0");
      sidenav.css("zIndex", "0");
      //menubar.css("color", "gray");
    }
  }
);


//add zoom class for the work images
$(".company img").on("mouseover", function(){
  $(".company img").addClass("zoom");
});



// photo gallary
var short_start=1;
var short_end = 28;
var photoNumber=1;
$("#OUR-WORK .short-photos .carousel-control-prev").click(function(){
  photoNumber = photoNumber==short_start ? short_end : photoNumber-1;
  var photoSrc = "photos/work/photo" + photoNumber + ".jpeg"
  $(".short-photos .d-block").prop("src", photoSrc);
})


$("#OUR-WORK .short-photos .carousel-control-next").click(function(){
  photoNumber = photoNumber==short_end ? short_start : photoNumber+1;
  var photoSrc = "photos/work/photo" + photoNumber + ".jpeg"
  $(".short-photos .d-block").prop("src", photoSrc);
})

var long_start=29;
var long_end = 43;
var photoNumber_long=29;
$("#OUR-WORK .long-photos .carousel-control-prev").click(function(){
  photoNumber_long = photoNumber_long==long_start ? long_end : photoNumber_long-1;
  var photoSrc_long = "photos/work/photo" + photoNumber_long + ".jpeg"
  $(".long-photos .d-block").prop("src", photoSrc_long);
})


$("#OUR-WORK .long-photos .carousel-control-next").click(function(){
  photoNumber_long = photoNumber_long==long_end ? long_start : photoNumber_long+1;
  var photoSrc_long = "photos/work/photo" + photoNumber_long + ".jpeg"
  $(".long-photos .d-block").prop("src", photoSrc_long);
})
