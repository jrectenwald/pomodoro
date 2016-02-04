export default Ember.Controller.extend({ 
  isValid: Ember.computed(
    'model.description',
    {
      get() {
        return !Ember.isEmpty(this.get('model.description')) 
      }
    }), 

  actions: {
    save() {
      if (this.get('isValid')) { 
        this.get('model').save().then((todo) => {
          this.transitionToRoute('to-dos.to-do', todo); 
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
      return false; 
    },
    cancel() { 
      this.transitionToRoute('home');
      return false; 
    }
  }
});