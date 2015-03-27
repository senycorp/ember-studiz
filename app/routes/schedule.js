import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    // Set template variables
    var applicationController = this.controllerFor('application');

    applicationController.set('header', 'Schedule');
    applicationController.set('crumbs', [{
      title: 'Schedule',
      icon: 'fa-dashboard'
    }]);
  },
  model: function() {
    // Retrieve and set models
    return {
      semesters: this.store.find('semester'),
      subjects: this.store.find('subject'),
      classes: this.store.find('class')
    };
  }
});
