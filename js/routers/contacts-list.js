define([
  'backbone',
  'views/root',
  'collections/contacts',
  'views/contacts-list/index',
  'views/contacts-list/contact-details',
  'views/pet-view',
  'collections/pets'
], function(Backbone, RootView, ContactCollection, ContactListIndexView, ContactListDetailView, PetsView, PetsCollection) {
  return Backbone.Router.extend({
    routes: {
      "": "index",
      "details/:id": "details",
      "colinNewRoute": "colinNewRoute"
    },
    colinNewRoute: function(){
      var pets = new PetsCollection();
      pets.create({name: "fifi", breed: "labradoodle"});
      pets.create({name: "fido", breed: "golden retriever"});
      pets.create({name: "snowball", breed: "maltese"});

      console.log(pets);

      var petsView = new PetsView({
        collection: pets
      });

      RootView.getInstance().setView(petsView)

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
      var contacts = new ContactCollection();
      contacts.fetch();
      console.dir(contacts)
      var model = contacts.get(id)
      var detailView = new ContactListDetailView({
        model: model
      });
      RootView.getInstance().setView(detailView);
    }
  });
}); 
