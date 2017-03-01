Router.configure({
    layoutTemplate: "mainLayout"
});

Router.route('/', {
    name: "home",
    template: "home"
});

Router.route('login',{
    name: "login",
    template: "login"
});

Router.route('userHome', {
    name: "userHome",
    template: "userHome"
})