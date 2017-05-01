Template.missionsProposees.events({
    'click .delete'(){
        PropositionMission.remove(this._id);
    },
}); 