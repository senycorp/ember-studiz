import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    /**
     * The index route exists only for redirecting
     * purpose to the start point of our application.
     */
    this.transitionTo('dashboard');
  }
});
