
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

//switch case 1
// Set the student's grade
const grade  = () => {
  document.getElementById("switchcase1").style.display = "none";

switch (true) {
    // If score is 90 or greater
    case grade >= 90:
        document.writeln("A");
        break;
    // If score is 80 or greater
    case grade >= 80:
        document.writeln("B");
        break;
    // If score is 70 or greater
    case grade >= 70:
        document.writeln("C");
        break;
    // If score is 60 or greater
    case grade >= 60:
        document.writeln("D");
        break;
    // Anything 59 or below is failing
    default:
        document.writeln("F");
}

// switch case 2

const month = new Date().getMonth();

switch (month) {
    // January, February, March
    case 0:
    case 1:
    case 2:
        document.writeln("Q1");
        break;
    // April, May, June
    case 3:
    case 4:
    case 5:
        document.writeln("Q2");
        break;
    // July, August, September
    case 6:
    case 7:
    case 8:
        document.writeln("Q3");
        break;
    // October, November, December
    case 9:
    case 10:
    case 11:
        document.writeln("Q4");
        break;
    default:
        document.writeln("Ooops. Check back later.");
}
