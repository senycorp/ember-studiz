import DS from 'ember-data';

export default DS.Model.extend({
  module: DS.attr('string'),
  building: DS.attr('string'),
  room: DS.attr('string'),
  professor: DS.attr('string'),
  subject: DS.belongsTo('subject'),
  semester: DS.belongsTo('semester')
}).reopenClass({
  FIXTURES: [
    {id: 1, module: 'Module example', room: '101', building: 'Gebäude A'}
  ]
});
