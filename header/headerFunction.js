function createNavBar() {
  // Create a container div for the navigation bar
  var navbarContainer = document.getElementById("navbar-container");

  // Create the navigation bar elements
  var navbar = document.createElement("nav");
  navbar.className = "navbar navbar-expand-lg navbar-light bg-light";

  var brandLink = document.createElement("a");
  brandLink.className = "navbar-brand";
  brandLink.href = "#";
  brandLink.textContent = "LMS";

  var navbarToggle = document.createElement("button");
  navbarToggle.className = "navbar-toggler";
  navbarToggle.setAttribute("type", "button");
  navbarToggle.setAttribute("data-toggle", "collapse");
  navbarToggle.setAttribute("data-target", "#navbarNav");
  navbarToggle.setAttribute("aria-controls", "navbarNav");
  navbarToggle.setAttribute("aria-expanded", "false");
  navbarToggle.setAttribute("aria-label", "Toggle navigation");

  var toggleIcon = document.createElement("span");
  toggleIcon.className = "navbar-toggler-icon";

  var navbarNav = document.createElement("div");
  navbarNav.className = "collapse navbar-collapse";
  navbarNav.id = "navbarNav";

  var navList = document.createElement("ul");
  navList.className = "navbar-nav";

  // Create individual navigation items
  var navItem1 = createNavItem("Home", "#");
  var navItem2 = createNavItem("Classes", "#");
  var navItem3 = createNavItem("Teachers", "#");
  var navItem3 = createNavItem("Students", "#");

  // Append elements to the DOM
  navbarToggle.appendChild(toggleIcon);
  navbar.appendChild(brandLink);
  navbar.appendChild(navbarToggle);
  navbar.appendChild(navbarNav);
  navbarNav.appendChild(navList);
  navList.appendChild(navItem1);
  navList.appendChild(navItem2);
  navList.appendChild(navItem3);

  navbarContainer.appendChild(navbar);
}

function createNavItem(text, link) {
  var listItem = document.createElement("li");
  listItem.className = "nav-item";

  var navLink = document.createElement("a");
  navLink.className = "nav-link";
  navLink.href = link;
  navLink.textContent = text;

  listItem.appendChild(navLink);
  return listItem;
}

// Call the function to create the navigation bar
createNavBar();
