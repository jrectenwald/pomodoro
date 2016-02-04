import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users', { resetNamespace: true }, function() {
    this.route('new');
    this.route('user', { path: ':user_id'}, function() {
      this.route('to-dos', { resetNamespace: true }, function() {
        this.route('to-do', { path: ':to_do_id'});
        this.route('new');
      });
    });

    this.route('edit', {
      path: ':user_id/edit'
    });
  });
  this.route('home');
});

export default Router;