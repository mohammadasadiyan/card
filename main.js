function mouseOver1() {
    document.images["img1"].src = "imgs/pic1.jpg"
    // document.images["img2"].src = "imgs/pic2.jpg"
    // document.images["img3"].src = "imgs/pic3.jpg"
    // document.images["img4"].src = "imgs/pic4.jpg"
    var img1 = document.getElementById("img1");
    // var img2 = document.getElementById("img2");
    // var img3 = document.getElementById("img3");
    // var img4 = document.getElementById("img4");
    img1.classList.add("mouse-over")
    // img2.classList.add("mouse-over")
    // img3.classList.add("mouse-over")
    // img4.classList.add("mouse-over")
}
function mouseOver2() {
    document.images["img2"].src = "imgs/pic2.jpg";
    var img2 = document.getElementById("img2");
    img2.classList.add("mouse-over")
}
function mouseOver3() {
    document.images["img3"].src = "imgs/pic3.jpg";
    var img3 = document.getElementById("img3");
    img3.classList.add("mouse-over")
}
function mouseOver4() {
    document.images["img4"].src = "imgs/pic4.jpg";
    var img4 = document.getElementById("img4");
    img4.classList.add("mouse-over")
}