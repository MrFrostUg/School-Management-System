function createWelcomeMessage() {
    var message =document.getElementById('welcomeMessage');
    // create the  welcome message element
var  header = document.createElement('h2');
header.className = "display-4";
header.textContent = 'Welcome miriam';

// adding the welcome message element

message.appendChild(header);
}

createWelcomeMessage();