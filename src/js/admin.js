import ExternalServices from "./ExternalServices.js";
import { alertMessage } from "./utils.js";

class Admin {
constructor(outputSelector) {
    this.mainElement = document.querySelector(outputSelector);
    this.token = null;
    this.services = new ExternalServices();
}

async login(creds, next) {
    // I built the login method with a callback: next. 
    // This makes it much more flexible...
    // there could be many different things the user wants to do after logging in...
    // this allows us that flexibility without having to write a bunch of login methods
    try {
        this.token = await this.services.loginRequest(creds);
        next()
    } catch (err) {
        // remember this from before?
        alertMessage(err.message.message);
    }
}


showLogin() {
//HTML FORM
this.mainElement.innerHTML = loginForm()
documnet.querySelector('#loginButton').addEventListener('click', (e) =>{

    const email  = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    this.login({email, password}, this.showOrders.bind(this));
});

}

    async showOrders() {

    try { const orders = await this.services.getOrders(this.token);
    this.mainElement.innerHTML = orderHTML();
    const parent = document.querySelector('#orders tbody');
    parent.innerHTML = orders.map(order=> `<tr><td>${order.id}</td><td>${new Date(order.orderDate).toLocaleDateString('en-US')}</td><td>${order.items.length}</td><td>${order.orderTotal}</td></tr>`).join('');
} catch(err) {
  console.log(err);
}
}

}

function loginForm() {

    return `<fieldset class=    `
}



    
