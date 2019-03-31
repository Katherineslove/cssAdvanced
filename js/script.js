$(document).ready(function() {
      console.log("jQuery has loaded");

      $("#spinDiv").click(function(){
        $(this).toggleClass("spin white red")
      });
})
