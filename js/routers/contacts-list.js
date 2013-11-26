define([
  'backbone',
  'views/root',
  'collections/contacts',
  'views/contacts-list/index',
  'views/contacts-list/contact-details',
  'views/pet-view',
  'collections/pets',
  'collections/model-methods',
  'views/model-methods-view'
], function(Backbone, RootView, ContactCollection, ContactListIndexView, ContactListDetailView, PetsView, PetsCollection, ModelMethodsCollection, ModelMethodsView) {
  return Backbone.Router.extend({
    routes: {
      "foo1": "index",
      "foo2/:id": "details",
      "foo3": "colinNewRoute",
      "": "backboneCheatSheet"
    },
    backboneCheatSheet: function(){

      var modelMethods = new ModelMethodsCollection()

      modelMethods.create({
        typeFoo: "Model",
        method: "11111constructor/initialize",
        codeSnippet: "new Model([attributes])",
        apiText: "When creating an instance of a model, you can pass in the initial values of the attributes, which will be set on the model."
      })
      
      modelMethods.create({
        typeFoo: "Model",
        method: "22222constructor/initialize",
        codeSnippet: "new Model([attributes])",
        apiText: "When creating an instance of a model, you can pass in the initial values of the attributes, which will be set on the model."
      })
      
      modelMethods.create({
        typeFoo: "Model",
        method: "33333constructor/initialize",
        codeSnippet: "new Model([attributes])",
        apiText: "When creating an instance of a model, you can pass in the initial values of the attributes, which will be set on the model."
      })


      var modelMethodsView = new ModelMethodsView({
        collection: modelMethods
      });

      RootView.getInstance().setView(modelMethodsView)


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
