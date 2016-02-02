import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users', function() {
    this.route('new');
    this.route('show', { path: ':user_id'})
  });
  this.route('to-dos', function() {
    this.route('show', { path: ':to_do_id'})
  });
});

export default Router;