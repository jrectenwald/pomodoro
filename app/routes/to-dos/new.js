import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      todo: this.store.createRecord('to-do'),
      user: this.store.findRecord('user', 1),
    });
  }, 
  setupController(controller, models){
    controller.set('todo', models.todo);
    controller.set('user', models.user);
  },
  resetController(controller, isExiting){
    if(isExiting){
      var todo = controller.get('todo');
      if(todo.get('isNew')){
        todo.destroyRecord();
      }
    }
  }
});