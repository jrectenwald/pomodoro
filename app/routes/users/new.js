import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {user: this.store.createRecord('user')};
  }, 
  setupController(controller, models){
    controller.set('user', models.user);
  },
  resetController(controller, isExiting){
    if(isExiting){
      var user = controller.get('user');
      if(user.get('isNew')){
        user.destroyRecord();
      }
    }
  }
});