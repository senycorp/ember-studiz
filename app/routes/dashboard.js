import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    var applicationController = this.controllerFor('application');

    // Set template variables
    applicationController.set('header', 'Dashboard');
    applicationController.set('crumbs', [{
      title: 'Dashboard',
      icon: 'fa-dashboard'
    }]);
  }
});
