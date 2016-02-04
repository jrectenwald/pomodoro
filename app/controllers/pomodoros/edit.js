import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.task',
      function() {
        return !Ember.isEmpty(this.get('model.task')) 
  }),

  actions: {
    save() {
      if (this.get('isValid')) {
        var _this = this; 
        this.get('model').save().then(function(pomodoro) {
          _this.transitionToRoute('pomodoros.pomodoro', pomodoro);
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
      return false; 
    },
    cancel() {
      this.transitionToRoute('pomodoros', this.get('model')); 
      return false;
    } 
  }
});