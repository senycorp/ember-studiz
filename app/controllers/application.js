import Ember from 'ember';

export default Ember.Controller.extend({
  /**
   * Template: Variables
   */
  appName: 'Studiz',
  header: '',
  headerSmall: '',

  /**
   * Breadcrump partials
   */
  crumbs: [
    {title: "Test", icon: "fa-dashboard"}
  ]
});
