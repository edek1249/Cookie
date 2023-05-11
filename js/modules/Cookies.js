export class Cookies{
    
    constructor() {
        console.log('test Cookies');
    }


    checkCookieEnabled() {
        // console.log(navigator.cookieEnabled);
        if(!navigator.cookieEnabled){
            alert('Masz wyłączoną obsułgę ciasteczek');
            return;
        }
    }

    setCookie(options){
        
    }
}