import Ember from 'ember';

export default Ember.ArrayController.extend({
  /**
   * Semester store
   */
  semesters: [],
  /**
   * Modal indicator Open/Close
   */
  modalIndicator: false,
  /**
   * Model for modal dialog
   */
  modalModel: false,
  actions: {
    /**
     * Save / Create a semester
     * @param model
     */
    saveSemester: function(model) {
      // Check for an id in model
      if (!model.get('id')) {
        // Let us create a new semester
        this.store.createRecord('semester', {
          title: model.get('title'),
          start: model.get('start'),
          end: model.get('end')
        }).save();
      }

      // Reset model for modal
      this.set('modalModel', Ember.Object.create({}));
    },
    /**
     * Open modal dialog
     * @param model
     */
    showModal: function(model) {
      // Check for an existing model
      if (!model) {
        // Create a new empty object
        this.set('modalModel', Ember.Object.create({}));
      } else {
        // Load existing model
        this.set('modalModel', model);
      }

      // Open modal
      this.set('modalIndicator', true);
    },
    /**
     * Rollback changed model on modal dismiss
     *
     * @param model
     */
    rollbackSemester: function(model) {
      // Check for an existing record
      if (model.get('id')) {
        // Rollback model
        model.rollback();
      }

      // Reset model
      this.set('modalModel', Ember.Object.create({}));
    }
  }
});
