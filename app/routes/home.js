import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('user');
  },
  actions: {
    delete(user) { 
      user.destroyRecord().then(() => {
        this.transitionTo('home'); 
      });
    }
  }
});
