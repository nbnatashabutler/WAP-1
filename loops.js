
var image = document.images[0];
var downloadingImage = new Image();
downloadingImage.onload = function(){
    image.src = this.src;   
};
downloadingImage.src = "https://s19.postimg.cc/jk17ed7mr/6479b2.png";

//for loop = do this for that many times explicitly

var myArray = ["first item in the array", "second item in the array", "third item in the array"];
  
for (var i = 0; i < myArray.length; i++) {
    document.writeln(myArray[i]);
}

//while loop = do this until that is not true

var count = 0;
        
while (count < 10) {
    document.writeln("you will see this 10 times");
 
    count++;
}
// do while 
do {
    document.writeln("This code will run once!");
} while (false)

    // let while 
const reqlimit = 10;

// Start off with 0 fish
let jobs = 0;

// Initiate while loop to run until fish reaches population limit
while (jobs < reqlimit) {
    // add one fish for each iteration
    job++;
    document.writeln("There's room for " + (reqlimit - job) + " more jobs.");
}
