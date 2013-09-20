define([
  'backbone',
  'collection',
  'views/root',
  'models/contact',
  'views/contacts-list/index'
], function(Backbone, Collection, RootView, ContactModel, ContactListIndexView) {
  return Backbone.Router.extend({
    routes: {
      "": "index"
    },
    index: function() {
      var contact1 = new ContactModel({
        firstname: "Barack", lastname: "Obama", phone: "(444) 444 4444"
      });
      var view = new ContactListIndexView({
        model: contact1
      });
      RootView.getInstance().setView(view);
    }
  });
}); 
