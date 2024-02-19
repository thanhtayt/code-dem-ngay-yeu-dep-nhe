$(function () {
//========================//
  var love="20-10-2023";
//========================//
  var parts=love.split("-"); 
  setInterval(function(){
    var time=new Date().getTime() - new Date(parts[2], parts[1] - 1, parts[0]).getTime();
    var days=Math.floor(time / (1000 * 60 * 60 * 24));
    var hours=Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes=Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds=Math.floor((time % (1000 * 60)) / 1000);
    $(".countdown.styled").html(
      "<div>" +
      days +
      " <span>Ngày</span></div><div>" +
      hours +
      " <span>Giờ</span></div><div>" +
      minutes +
      " <span>Phút</span></div><div>" +
      seconds +
      " <span>Giây</span></div>"
    );
  }, 1000); 
});
