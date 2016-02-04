export default Ember.Controller.extend({ 
  isValid: Ember.computed(
    'model.firstName',
    'model.lastName',
    'model.email',
    'model.password',
    {
      get() {
        return !Ember.isEmpty(this.get('model.firstName')) 
        && !Ember.isEmpty(this.get('model.lastName')) 
        && !Ember.isEmpty(this.get('model.email')) 
        && !Ember.isEmpty(this.get('model.password'));
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