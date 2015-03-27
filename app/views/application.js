import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    // Sidebar-Toggle-Handler
    this.$("a.sidebar-toggle").click(function() {
      // Hide spans
      this.$('.user-panel > div.info, .sidebar-form, ul.sidebar-menu > li > a span, ul.sidebar-menu > li > span, ul.sidebar-menu > li small.label').toggle();

      // Optimize content widths
      if ( this.$('section.sidebar').css('width') !== '64px') {
        this.$('section.sidebar, aside.main-sidebar').css('width', '64px');
        this.$('div.content-wrapper, footer.main-footer').css('margin-left', '64px');
      } else {
        this.$('section.sidebar, aside.main-sidebar').css('width', '230px');
        this.$('div.content-wrapper, footer.main-footer').css('margin-left', '230px');
      }
    }.bind(this));
  }
});
