Entreprise = new Mongo.Collection('Entreprise');

Entreprise.allow({
    insert: function(){return true;},
    update: function(){return true;},
    remove: function(){return true;}
});

var EntrepriseSchema = new SimpleSchema({
    nom: {
        type: String,
        label: "Entreprise",
        max: 200
    },
    
    adresse: {
        type: String,
        label: "Adresse de l'entreprise",
        max: 400
    },
    
    codePostal: {
        type: String,
        label: "Code Postal",
        max: 6
    },
    
    ville: {
        type: String,
        label: "Ville",
        max: 100
    }
});

Entreprise.attachSchema(EntrepriseSchema);