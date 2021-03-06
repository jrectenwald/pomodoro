import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.firstName',
    'model.lastName',
      function() {
        return !Ember.isEmpty(this.get('model.firstName')) 
        && !Ember.isEmpty(this.get('model.lastName')) 
  }),

  actions: {
    save() {
      if (this.get('isValid')) {
        var _this = this; 
        this.get('model').save().then(function(user) {
          _this.transitionToRoute('users.user', user);
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
      return false; 
    },
    cancel() {
      this.transitionToRoute('users.user', this.get('model')); 
      return false;
    } 
  }
});