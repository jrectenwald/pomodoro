import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.description',
      function() {
        return !Ember.isEmpty(this.get('model.description')) 
  }),

  actions: {
    save() {
      if (this.get('isValid')) {
        var _this = this; 
        this.get('model').save().then(function(todo) {
          _this.transitionToRoute('to-dos.to-do', todo);
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
      return false; 
    },
    cancel() {
      this.transitionToRoute('to-dos.to-do', this.get('model')); 
      return false;
    } 
  }
});