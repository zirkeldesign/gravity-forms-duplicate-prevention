/**
 * Client-side scripting for the Gravity Forms Duplicate Prevention plugin
 * @package Gravity Forms
 * @subpackage Gravity Forms Duplicate Prevention
 * @author Buckeye Interactive
 * @author Daniel Sturm
 * @version 0.1.5
 * @link http://wordpress.org/extend/plugins/gravity-forms-duplicate-prevention/
 */

/*global jQuery: true */
/*jslint white: true */
/*jshint browser: true */

(function (window, $) {
  "use strict";

  /** Intercept form submissions and disable the submit button */
  $(document).on('submit.gfdp', '.gform_wrapper form', function () {
    if ($('.gfield_error', this).length) {
      return;
    }
    $('[type="submit"]', this)
      .attr('disabled', 'disabled')
      .addClass('gravityforms-duplicateprevention-loading');
  });
})(window, window.jQuery);