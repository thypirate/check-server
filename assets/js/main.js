$(document).ready(function() {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  $(".navbar-burger").toggleClass("is-active");
  $(".navbar-menu").toggleClass("is-active");
  });

});



function checkSiteStatus(){

    var url = $("#url").val();
    $.ajax({
        timeout: 5000,
        type: 'GET',
        dataType: 'jsonp',
        url: "https://" + url,
        cache: false,

    statusCode: {
        404:function(){
            $(".lights").addClass("red");
        },
        0:function(){

        },
        500:function(){

        },
        503:function(){

        },
        200:function(){
          $(".lights").removeClass("red");
          $(".lights").addClass("green");
        }
      }
  });
}
