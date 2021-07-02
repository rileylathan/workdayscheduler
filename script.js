$(document).ready(function () {


var saveBtn = $(".saveBtn");

$(".saveBtn").on("click", function () {
    var value = $(this).siblings("description").val()
    var time = $(this).parent().attr("id")
    console.log(time);
    console.log(value);
})
















































})