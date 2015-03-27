import Ember from 'ember';

/**
 * Bootstrap Modal Component
 */
export default Ember.Component.extend({
  /**
   * Template bindings
   */
  tagName: 'div',
  classNames: ['modal', 'fade'],
  attributeBindings: ['tabindex',
    'dialog',
    'ariaLabelledby:aria-labelledby',
    'ariaHidden:aria-hidden'],
  tabindex: -1,
  role: 'dialog',
  ariaLabelledby: '',
  ariaHidden: 'true',

  /**
   * Model
   */
  model: false,

  /**
   * Indicator: Open / Close
   */
  indicator: false,

  /**
   * Modal: Title
   */
  title: 'SampleTitle',

  didInsertElement: function () {
    // Initialize modal
    this.$().modal({show: false});
  },

  /**
   * Handler
   *
   * Handles the visibility of the modal
   */
  modalHandler: function () {
    // Handle visibilty
    if (this.get('indicator')) {
      this.$().modal('show');
    } else {
      this.set('indicator', false);
      this.$().modal('hide');
    }
  }.observes('indicator'),

  actions: {
    /**
     * Dismiss modal
     */
    dismiss: function () {
      // Reset indicator
      this.set('indicator', false);

      // Send action
      this.sendAction('dismiss', this.get('model'));

      // Hide modal
      this.$().modal('hide');
    },

    /**
     * Submit
     */
    submit: function () {
      // Reset indicator
      this.set('indicator', false);

      // Send action
      this.sendAction('submit', this.get('model'));
    }
  }
});
