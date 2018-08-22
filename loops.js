
var image = document.images[0];
var downloadingImage = new Image();
downloadingImage.onload = function(){
    image.src = this.src;   
};
downloadingImage.src = "https://s19.postimg.cc/jk17ed7mr/6479b2.png";


var myArray = ["one", "two", "three"];
  
for (var i = 0; i < myArray.length; i++) {
    document.writeln(myArray[i]);
}

