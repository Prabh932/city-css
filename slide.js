var	dir="assets/";
var	images=["slide1","slide2","slide4","slide5","slide3","slide6"]
var i=0;

function changeImage() {
document.getElementById('slide').src=dir+images[i]+".jpg";
i=i<images.length-1?++i:0;
setTimeout(changeImage,4000);
}

function prev() {
i=i>0?--i:images.length-1;
document.getElementById('slide').src=dir+images[i]+".jpg";
}

function next() {
i=i<images.length-1?++i:0;
document.getElementById('slide').src=dir+images[i]+".jpg";
}