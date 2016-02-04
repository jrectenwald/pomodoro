import Ember from 'ember';

export default Ember.Controller.extend({
  hasfirstName: Ember.computed.notEmpty('user.firstName'),
  hasLastName: Ember.computed.notEmpty('user.lastName'),
  hasEmail: Ember.computed.notEmpty('user.email'),
  hasPassword: Ember.computed.notEmpty('user.password'),
  isValid: Ember.computed.and(
    'hasfirstName',
    'hasLastName',
    'hasEmail',
    'hasPassword'
  ), 
  actions:{
    save: function(){
      debugger;
      if (this.get('isValid')){
        let user = this.get('user');
        user.save().then((user) => {
          this.transitionToRoute('home');
        });
      }
      else{
        this.set('errorMessage', "Please fill in all fields.")
      }
    }, 
    cancel: function(){
      this.transitionToRoute('home');
    }
  }
});