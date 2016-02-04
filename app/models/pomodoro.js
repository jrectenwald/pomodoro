import DS from 'ember-data';

export default DS.Model.extend({
  task: DS.attr('string'),
  toDo: DS.belongsTo('to-do', {async: true})
});
