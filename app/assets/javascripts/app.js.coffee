# App acts as a global container for JavaScript behaviors and helpers. Behaviors can listen for the
# `app:ready` event, which will be triggered when the page loads via the DOM.
#
@App =
  Behaviors: {}

$(document).ready ->
  $(document).trigger 'app:ready'
  AppTheme.init

