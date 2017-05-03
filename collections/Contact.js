/*
Contact = new Meteor.Collection('Contact');

Contact.allow({
    insert: function(){return true;},
    update: function(){return true;},
    remove: function(){return true;}
});

var ContactSchema = new SimpleSchema({
    nom: {
        type: String,
        label: "Nom du contact dans cette entreprise",
        max: 100
    },
    
    mail: {
        type: String,
        label: "Adresse mail du contact",
        max: 100
    },
    
    tel: {
        type: String,
        label: "Numéro de téléphone du contact",
        max: 15
    },
    /*
    entreprise: {
        type: Entreprise,
    },
    
});

Contact.attachSchema(ContactSchema);
*/