import { InfoCookies } from "./modules/InfoCookies.js";

const infoCookies = new InfoCookies;

const closeLink = document.querySelector('.close');

closeLink.addEventListener('click',(event) => {

    event.preventDefault();

    infoCookies.setCookie();

})