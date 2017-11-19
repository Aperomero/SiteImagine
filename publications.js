Meteor.publish("allPropositionMissionHeaders", function(){
    return PropositionMission.find({}, {
        fields: {content: 0}
    });
});