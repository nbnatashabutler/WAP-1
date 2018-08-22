
var image = document.images[0];
var downloadingImage = new Image();
downloadingImage.onload = function(){
    image.src = this.src;   
};
downloadingImage.src = "https://s19.postimg.cc/jk17ed7mr/6479b2.png";
