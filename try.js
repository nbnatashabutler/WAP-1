const checkNumber = () => {
  document.getElementById("box").style.display = "none";
  
  let descriptionText;
  
  try {
    
    
    let inputtedNumber = document.getElementById("box").value;
    
    if (inputtedNumber >= 20 && inputtedNumber <= 30) {
      descriptionText = "Nice job";
    } else {
      throw "Thats the wrong number";
    }
    
  } catch (error) {
    descriptionText = error;
  } finally {
    document.getElementById("descriptionBox").innerHTML = descriptionText;
  }
