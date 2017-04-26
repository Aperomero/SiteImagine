Router.configure({
    layoutTemplate: "Layout"
});

Router.route('/', {
    name: "accueil",
    template: "accueil"
});

Router.route('pointsForts', {
    name: "pointsForts",
    template: "pointsForts"
});

Router.route('competences', {
    name: "competences",
    template: "competences"
});

Router.route('mission', {
    name: "mission",
    template: "mission"
});

Router.route('plaquette', {
    name: "plaquette",
    template: "plaquette"
});

Router.route('clients', {
    name: "clients",
    template: "clients"
});

Router.route('membres', {
    name: "membres",
    template: "membres"
});