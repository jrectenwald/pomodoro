import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('user', params.user_id);
  },
  actions: {
    delete(todo) { 
      todo.destroyRecord().then(() => {
        this.transitionTo('users.user'); 
      });
    }
  }
});
