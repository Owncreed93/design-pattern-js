const user = new User()

const init = () => {

    user.on('login', userLoggin)

}

const userLoggedIn = () => {

    // * User logs in



}

app.init()

// * Somewhere in our app

const login  = () => {

    // * SESSIN START LOGIC

    user.trigger('login');

}

login()