import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('to-do', params.to_do_id);
  },
  delete(pomodoro) { 
      pomodoro.destroyRecord().then(() => {
        this.transitionTo('to-dos.to-do'); 
      });
    }
});
