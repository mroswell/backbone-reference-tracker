define([
  'view',
  'templates/pet-view'
], function (View, template) {
  return View.extend({
    name: 'petView',
    template: template
  });
});
