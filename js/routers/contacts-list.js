define([
  'backbone',
  'views/root',
  'collections/contacts',
  'views/contacts-list/index',
  'views/contacts-list/contact-details'
], function(Backbone, RootView, ContactCollection, ContactListIndexView, ContactListDetailView) {
  return Backbone.Router.extend({
    routes: {
      "": "index",
      "details/:id": "details"
    },
    index: function() {
      var contacts = new ContactCollection();
      contacts.fetch();
      var view = new ContactListIndexView({
        collection: contacts
      });
      RootView.getInstance().setView(view);
    },
    details: function(id){
      var contactsCollection = new ContactCollection();
      var model = contactsCollection.get(id)
      var detailView = new ContactListDetailView({
        model: model
      });
      RootView.getInstance().setView(detailView);
    }
  });
}); 
