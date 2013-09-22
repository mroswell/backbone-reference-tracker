define([
  'view',
  'templates/contacts-list/index',
  'views/contacts-list/contact-form'
], function(View, template, ContactFormChildView) {
  return View.extend({
    name: "contacts-list/index",
    template: template,
    events: {
    },
    initialize: function(){
      this.contactForm = new ContactFormChildView({
        collection: this.collection
      })
    },
    handleDelete: function(e) {
      $(event.target).model().destroy();
    }
  });
});

