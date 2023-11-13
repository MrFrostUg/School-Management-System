
// Function to add an image to the navigation bar
function addImageToNavbar() {
    // Create an image element
    var image = document.createElement("img");
    image.src = "image/icon.svg"; 
    image.alt = "Logo";

    // Add a CSS class to style the image
    image.classList.add("navbar-logo");

    // Append the image to the navbar-brand element
    var navbarBrand = document.querySelector(".navbar-brand");
    navbarBrand.appendChild(image);
}

// Call the function to add the image when the page loads
window.addEventListener("load", addImageToNavbar);
