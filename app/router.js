import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users', function() {
    this.route('user', { path: ':user_id'})
    this.route('new');
  });
  this.route('to-dos', function() {
    this.route('to-do', { path: ':to_do_id'})
  });
});

export default Router;