define([
  'backbone',
  'views/root',
  'collections/contacts',
  'views/contacts-list/index'
], function(Backbone, RootView, ContactCollection, ContactListIndexView) {
  return Backbone.Router.extend({
    routes: {
      "": "index"
    },
    index: function() {
      var contacts = new ContactCollection();

      contacts.add({firstname: "Barack", lastname: "Obama", phone: "(333) 111 4444"})
      contacts.add({firstname: "Hillary", lastname: "Clinton", phone: "(999) 222 2222"})

      var view = new ContactListIndexView({
        collection: contacts
      });
      RootView.getInstance().setView(view);
    }
  });
}); 
