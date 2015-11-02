Meteor.startup(function(){

    Meteor.subscribe("tarefas", function(){
        return Tarefas.find({});
    });
});