import homeTemplate from "./home.template.js";
function initialize() {
    const homeContainer =document.querySelector(".home-container");
    homeContainer.innerHTML= homeTemplate();
}
function addNavigation(content) {
    getElement().innerHTML = content;
}
function getElement()
 { return document.querySelector(".header-section"); 
}
function addContent(content) {
    getContent().innerHTML = content;
}
function getContent() {
    return document.querySelector('.content-section');
}
function footerElement(content){
    getFooter().innerHTML = content;
}
function getFooter() {
    return document.querySelector(".footer-section");
}
export default {
    initialize,
    addNavigation,
    addContent,
    footerElement
};