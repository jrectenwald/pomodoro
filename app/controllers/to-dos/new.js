import Ember from 'ember';

export default Ember.Controller.extend({
  hasDescription: Ember.computed.notEmpty('todo.description'),
  hasUser: Ember.computed.notEmpty('todo.user.id'),
  isValid: Ember.computed.and(
    'hasDescription',
    'hasUser'
  ), 
  actions:{
    save: function(){
      if (this.get('isValid')){
        let todo = this.get('todo');
        todo.save().then((todo) => {
          this.transitionToRoute('users.user');
        });
      }
      else{
        this.set('errorMessage', "Please fill in all fields.")
      }
    }, 
    cancel: function(){
      this.transitionTo('users');
    }
  }
});