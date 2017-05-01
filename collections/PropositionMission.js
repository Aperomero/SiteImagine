PropositionMission = new Meteor.Collection('PropositionMission');

PropositionMission.allow({
    insert: function(){return true;},
    update: function(){return true;},
    remove: function(){return true;}
});

var PropositionMissionSchema = new SimpleSchema({
    title: {
        type: String,
        label: "Titre",
        max: 200
    }
});

PropositionMission.attachSchema(PropositionMissionSchema);