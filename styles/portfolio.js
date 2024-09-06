
document.addEventListener("DOMContentLoaded", function() {
  let isVisible = false;
  document.getElementById("click-text").addEventListener("click", function() {
    if (!isVisible) {
      document.getElementById("hidden-div").style.display = "flex";
      isVisible = true;
    } else {
      document.getElementById("hidden-div").style.display = "none";
      isVisible = false;
    }
  });
  document.addEventListener("click", function(event) {
    if (isVisible && !document.getElementById("hidden-div").contains(event.target) && !document.getElementById("click-text").contains(event.target)) {
      document.getElementById("hidden-div").style.display = "none";
      isVisible = false;
    }
  });
});


setInterval(function() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  document.getElementById('clock').innerHTML ="Time-"+ hours + ':' + minutes + ':' + seconds;
}, 1000);





