import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('to-do');
  },

  actions: {
    save: function() {
      this.modelFor('to-dos.new').save();
      return false;
    }
  }
});