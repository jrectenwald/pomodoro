import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users', { path: '/users/:user_id'}, function() {
    this.route('to-do')
  });
});

export default Router;



