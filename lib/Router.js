Router.configure({
    layoutTemplate: "mainLayout"
});

Router.route('/', {
    name: "home",
    template: "home"
});

Router.route('userHome', {
    name: "userHome",
    template: "userHome"
});

Router.route('missions', {
    name : "missions",
    template: "missions"
});

Router.route('missions/dispos', {
    name: "missionsDispos",
    template: "missionsDispos"
});

Router.route('missions/proposition', {
    name: "propositionMission",
    template: "propositionMission"
});

Router.route('missions/proposees', {
    name: "missionsProposees",
    template: "missionsProposees",
    data: function(){
		var propositionMission = PropositionMission.find();
		
		return {
			propositionMission: propositionMission
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allPropositionMissionHeaders");
	}
});