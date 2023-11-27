import navTemplate from "./header/navigation-component.js";
import homeTemplate  from "./homecontainer/home.component.js";
import contentTemplate from "./site-content/content-componets.js";
import footerTemp from "./footer/footer-component.js";
const app = {};
app.initialize= () => {
    homeTemplate.initialize();
    homeTemplate.addNavigation(navTemplate.render());
    homeTemplate.addContent(contentTemplate.render());
    homeTemplate.footerElement(footerTemp.render());
    

}

document.addEventListener("DOMContentLoaded",() => 
{app.initialize();});

