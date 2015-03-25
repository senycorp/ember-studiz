/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

// Admin-LTE: Dependencies

// Bootstrap 3.3.2 -->
app.import('bower_components/admin-lte/bootstrap/css//bootstrap.min.css');
// FontAwesome 4.3.0 -->
app.import('bower_components/font-awesome/css/font-awesome.min.css');
// Ionicons 2.0.0 -->
app.import('bower_components/ionicons/css/ionicons.css');
// Theme style -->
app.import('bower_components/admin-lte/dist/css/AdminLTE.min.css');
// AdminLTE Skins. Choose a skin from the css/skins folder instead of downloading all of them to reduce the load. -->
app.import('bower_components/admin-lte/dist/css/skins/_all-skins.min.css');
// iCheck -->
app.import('bower_components/admin-lte/plugins/iCheck/flat/blue.css');
// Morris chart -->
app.import('bower_components/admin-lte/plugins/morris/morris.css');
// jvectormap -->
app.import('bower_components/admin-lte/plugins/jvectormap/jquery-jvectormap-1.2.2.css');
// Date Picker -->
app.import('bower_components/admin-lte/plugins/datepicker/datepicker3.css');
// Daterange picker -->
app.import('bower_components/admin-lte/plugins/daterangepicker/daterangepicker-bs3.css');
// bootstrap wysihtml5 - text editor -->
app.import('bower_components/admin-lte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css');


// jQuery 2.1.3 -->
app.import('bower_components/admin-lte/plugins/jQuery/jQuery-2.1.3.min.js');
// jQuery UI 1.11.2 -->
app.import('bower_components/jquery-ui/jquery-ui.min.js');
// Bootstrap 3.3.2 JS -->
app.import('bower_components/admin-lte/bootstrap/js/bootstrap.min.js');
// Morris.js charts -->
app.import('bower_components/raphael/raphael-min.js');
app.import('bower_components/admin-lte/plugins/morris/morris.min.js');
// Sparkline -->
app.import('bower_components/admin-lte/plugins/sparkline/jquery.sparkline.min.js');
// jvectormap -->
app.import('bower_components/admin-lte/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js');
app.import('bower_components/admin-lte/plugins/jvectormap/jquery-jvectormap-world-mill-en.js');
// jQuery Knob Chart -->
app.import('bower_components/admin-lte/plugins/knob/jquery.knob.js');
// daterangepicker -->
app.import('bower_components/admin-lte/plugins/daterangepicker/daterangepicker.js');
// datepicker -->
app.import('bower_components/admin-lte/plugins/datepicker/bootstrap-datepicker.js');
// Bootstrap WYSIHTML5 -->
//app.import('bower_components/admin-lte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js');
// iCheck -->
app.import('bower_components/admin-lte/plugins/iCheck/icheck.min.js');
// Slimscroll -->
app.import('bower_components/admin-lte/plugins/slimScroll/jquery.slimscroll.min.js');
// FastClick -->
app.import('bower_components/admin-lte/plugins/fastclick/fastclick.min.js');
// AdminLTE App -->
app.import('bower_components/admin-lte/dist/js/app.min.js');

// AdminLTE dashboard demo (This is only for demo purposes) -->
app.import('bower_components/admin-lte/dist/js/pages/dashboard.js');

// AdminLTE for demo purposes -->
app.import('bower_components/admin-lte/dist/js/demo.js');


module.exports = app.toTree();
