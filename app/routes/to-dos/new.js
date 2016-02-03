import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      todo: this.store.createRecord('to-do'),
      users: this.store.findAll('user'),
    });
  }, 
  setupController(controller, models){
    controller.set('todo', models.todo);
    controller.set('users', models.users);
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