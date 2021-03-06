export default Ember.Controller.extend({ 
  isValid: Ember.computed(
    'model.firstName',
    'model.lastName',
    {
      get() {
        return !Ember.isEmpty(this.get('model.firstName')) 
        && !Ember.isEmpty(this.get('model.lastName')) 
      }
    }), 

  actions: {
    save() {
      if (this.get('isValid')) { 
        this.get('model').save().then((user) => {
          this.transitionToRoute('users.user', user); 
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
      return false; 
    },
    cancel() { 
      this.transitionToRoute('users');
      return false; 
    }
  }
});