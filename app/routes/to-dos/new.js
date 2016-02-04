import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let todo = this.store.createRecord('to-do');
    let user = this.store.findRecord('user', this.paramsFor('users.user').user_id);
    todo.user = user;
    return Ember.RSVP.hash({
      todo: todo
    });
  }, 
  setupController(controller, models){
    controller.set('todo', models.todo);
    controller.set('users', [models.todo.user]);
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