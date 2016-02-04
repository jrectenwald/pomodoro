import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  complete: DS.attr('boolean'),
  user_id: DS.attr('number'),
  user: DS.belongsTo('user', {async: true}),
  pomodoros: DS.hasMany('pomodoro', {async: true})
});
