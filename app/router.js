import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('users', function() {
    this.route('new');
    this.route('user', { path: ':user_id'}, function() {
      this.resource('to-dos', function() {
        this.route('to-do', { path: ':to_do_id'});
        this.route('new');
      });
    });
  });
  
});

export default Router;