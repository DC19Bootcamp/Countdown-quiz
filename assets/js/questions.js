for(var i = 1; i <= 4; i++) {
    // Create a new button element
    var button = document.createElement("button");
  
    // Set the button text
    button.innerHTML = "Button " + i;
  
    // Set an id for the button
    button.id = "Question " + i;
  
    // Add an event listener to the button
    button.addEventListener("click", function(){
        alert("Button " + i + " was clicked");
    });
  
    // Append the button to the body
    document.body.appendChild(button);
  }