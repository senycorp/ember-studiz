import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  color: DS.attr('string')
}).reopenClass({
  FIXTURES: [
  {id: 1, title: 'Programmierung', color: 'red'},
  {id: 2, title: 'Datenbanken', color: 'blue'},
  {id: 3, title: 'Robotics', color: 'orange'},
  {id: 4, title: 'Algorithmen', color: 'yellow'}
]});
