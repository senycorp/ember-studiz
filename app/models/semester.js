import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  start: DS.attr('string'),
  end: DS.attr('string')
}).reopenClass({
  FIXTURES: [
  {id: 1, title: 'Sommersemester 2015', start: '2015-01-01', end: '2015-11-30'},
  {id: 2 ,title: 'Wintersemester 2015', start: '2015-12-01', end: '2016-03-30'}
]});
