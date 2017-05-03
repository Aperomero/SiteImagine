PropositionMission = new Meteor.Collection('PropositionMission');

PropositionMission.allow({
    insert: function(){return true;},
    update: function(){return true;},
    remove: function(){return true;}
});

/*
Il faut utiliser les bases de données Contact et Entreprise avec le nouveau Form. Attention, il faudra aussi modifier le code html dans le template missionProposees. Aller Gillou, c'est pour toi
*/

var PropositionMissionSchema = new SimpleSchema({
    title: {
        type: String,
        label: "Titre",
        max: 200
    },
    
    entreprise: {
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
    },
    
    nomContact: {
        type: String,
        label: "Nom du contact dans cette entreprise",
        max: 100
    },
    
    mailContact: {
        type: String,
        label: "Adresse mail du contact",
        max: 100
    },
    
    telContact: {
        type: String,
        label: "Numéro de téléphone du contact",
        max: 15
    },
    
    /*
    besoinQui: {
        type: String,
        label: "Besoin : Qui ?",
        max: 400
    },
    */
    
});

PropositionMission.attachSchema(PropositionMissionSchema);