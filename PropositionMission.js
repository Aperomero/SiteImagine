PropositionMission = new Mongo.Collection('PropositionMission');

PropositionMission.allow({
    insert: function(){return true;},
    update: function(){return true;},
    remove: function(){return true;}
});

/*
Il faut utiliser les bases de données Contact et Entreprise avec le nouveau Form. Attention, il faudra aussi modifier le code html dans le template missionProposees.
*/

var PropositionMissionSchema = new SimpleSchema({
    title: {
        type: String,
        label: "Titre",
        max: 200
    },
    
    entreprise: {
        type: Entreprise,
        label: "Entreprise",
        max: 200
    },
    
    contact:{
        type: Contact,
        label: "Contact",
        max: 200
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