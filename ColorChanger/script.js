function bgchange(color) {
    let colorArray = ["#e58e26", "#f9b4ab","#B1FB17", "#78e08f", "#fd79a8"];
    document.body.style.background = colorArray[color];
}

let colorArray = ["#e58e26", "#f9b4ab","#B1FB17", "#78e08f", "#fd79a8"];
var colorbox = document.getElementById("colorbox");

colorArray.forEach(function (color, index) {
    let span = document.createElement("span");
    span.style.backgroundColor = color;
    span.addEventListener("click", function() {
        bgchange(index);
    });
    colorbox.appendChild(span);
});