
function onCLickDisplayAddress() {
    var blankElement = document.getElementById("blank-container");
    var blankStatus = blankElement.style.display;
// Khi bạn muốn ẩn phần tử lại:
blankElement.classList.remove("active");
    if (blankStatus === "none") {
        blankElement.style.display = "block";
        blankElement.classList.add("fade-in", "active");
    } else {
        blankElement.style.display = "none";
        blankElement.classList.remove("active");
    }
}
    function onClickChangeColor(){
        // Lấy tham chiếu đến nút
var button = document.getElementById("myButton");

// Thêm sự kiện click vào nút
button.addEventListener("click", function() {
  // Thêm lớp "active" vào nút
  button.classList.toggle("active");
});
    }