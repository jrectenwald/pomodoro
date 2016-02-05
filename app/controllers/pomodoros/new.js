export default Ember.Controller.extend({ 
  isValid: Ember.computed(
    'model.task',
    {
      get() {
        return !Ember.isEmpty(this.get('model.task')) 
      }
    }), 

  actions: {
    save() {
      if (this.get('isValid')) { 
        this.get('model').save().then((pomodoro) => {
          this.transitionToRoute('pomodoros.pomodoro', pomodoro); 
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
      return false; 
    },
    cancel() { 
      this.transitionToRoute('to-dos.to-do');
      return false; 
    }
  }
});