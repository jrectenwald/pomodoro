import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('user');
  },
  actions: {
    delete(friend) { 
      friend.destroyRecord().then(() => {
        this.transitionTo('home'); 
      });
    }
  }
});
