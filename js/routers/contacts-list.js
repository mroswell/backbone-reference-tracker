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

      var modelMethods = new ModelMethodsCollection();

      modelMethods.create({
        typeFoo: "Model",
        method: "11111constructor/initialize",
        codeSnippet: "new Model([attributes])",
        apiText: "When creating an instance of a model, you can pass in the initial values of the attributes, which will be set on the model."
      });

      modelMethods.create({
        typeFoo: "Model",
        method: "22222constructor/initialize",
        codeSnippet: "new Model([attributes])",
        apiText: "When creating an instance of a model, you can pass in the initial values of the attributes, which will be set on the model."
      });

      modelMethods.create({
        typeFoo: "Model",
        method: "33333constructor/initialize",
        codeSnippet: "new Model([attributes])",
        apiText: "When creating an instance of a model, you can pass in the initial values of the attributes, which will be set on the model."
      });
      modelMethods.create({
        typeFoo: "Events",
        typeFooDef: " Bind and trigger custom named events",
        method: "on",
        codeSnippet: "object.on(event, callback, [context])[context])",
        apiText: "Bind a callback function to an object."
      });


      modelMethods.create({
        typeFoo: "Events",
        typeFooDef: "Bind and trigger custom named events",
        method: "off",
        codeSnippet: "object.off([event], [callback], [context])",
        apiText: "Remove a previously-bound callback function from an object."
      });


      modelMethods.create({
        typeFoo: "Events",
        typeFooDef: "Bind and trigger custom named events",
        method: "trigger",
        codeSnippet: "object.trigger(event, [*args])",
        apiText: "Trigger callbacks for the given event, or space-delimited list of events."
      });


      modelMethods.create({
        typeFoo: "Events",
        typeFooDef: "Bind and trigger custom named events",
        method: "once",
        codeSnippet: "",
        apiText: ""
      });
      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "extend",
        codeSnippet: "Backbone.Model.extend(properties, [classProperties])",
        apiText: "To create a Model class of your own, you extend Backbone.Model and provide instance properties, as well as optional classProperties to be attached directly to the constructor function."
      });

      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "constructor / initialize",
        codeSnippet: "new Model([attributes])",
        apiText: "When creating an instance of a model, you can pass in the initial values of the attributes, which will be set on the model."
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "get",
        codeSnippet: "model.get(attribute)",
        apiText: "Get the current value of an attribute from the model."
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "set",
        codeSnippet: "model.set(attributes, [options])",
        apiText: "Set a hash of attributes (one or many) on the model."
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "escape",
        codeSnippet: "model.escape(attribute)",
        apiText: "Similar to get, but returns the HTML-escaped version of a model's attribute."
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "has",
        codeSnippet: "model.has(attribute)",
        apiText: "Returns true if the attribute is set to a non-null or non-undeÔ¨Åned value."
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "unset",
        codeSnippet: "model.unset(attribute, [options])",
        apiText: "Remove an attribute by deleting it from the internal attributes hash."
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "clear",
        codeSnippet: "model.clear([options])",
        apiText: "Removes all attributes from the model."
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "id",
        codeSnippet: "model.id",
        apiText: "A special property of models, the id is an arbitrary string (integer id or UUID)."
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "idAttribute",
        codeSnippet: "model.idAttribute",
        apiText: "A model's unique identiÔ¨Åer is stored under the id attribute."
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "cid",
        codeSnippet: "model.cid",
        apiText: "A special property of models, the cid or client id is a unique identiÔ¨Åer automatically assigned to all models when they're Ô¨Årst created."
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "attributes",
        codeSnippet: "model.attributes",
        apiText: "The attributes property is the internal hash containing the model's state."
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "defaults",
        codeSnippet: "model.defaults or model.defaults()",
        apiText: "The defaults hash (or function) can be used to specify the default attributes for your model."
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "toJSON",
        codeSnippet: "model.toJSON()",
        apiText: "Return a copy of the model's attributes for JSON stringiÔ¨Åcation."
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "fetch",
        codeSnippet: "model.fetch([options])",
        apiText: "Resets the model's state from the server."
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "save",
        codeSnippet: "model.save([attributes], [options])",
        apiText: "Save a model to your database (or alternative persistence layer), by delegating to Backbone.sync."
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "destroy",
        codeSnippet: "model.destroy([options])",
        apiText: "Destroys the model on the server by delegating an HTTP DELETE request to Backbone.sync."
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "validate",
        codeSnippet: "model.validate(attributes)",
        apiText: "Validate is called before set and save, and is passed the attributes that are about to be updated."
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "isValid",
        codeSnippet: "model.isValid()",
        apiText: "Call model.isValid() to check if the model is currently in a valid state, according to your validate function."
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "url",
        codeSnippet: "model.url()",
        apiText: "Returns the relative URL where the model's resource would be located on the server."
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "urlRoot",
        codeSnippet: "model.urlRoot",
        apiText: "Specify a urlRoot if you're using a model outside of a collection, to enable the default url function to generate URLs based on the model id."
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "parse",
        codeSnippet: "model.parse(response).url()",
        apiText: "Parse is called whenever a model's data is returned by the server, in fetch, and save."
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "clone",
        codeSnippet: "model.clone()",
        apiText: "Returns a new instance of the model with identical attributes."
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "isNew",
        codeSnippet: "model.isNew()",
        apiText: "If the model does not yet have an id, it is considered to be new."
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "change",
        codeSnippet: "model.change()",
        apiText: "Manually trigger the 'change' event and a 'change:attribute' event for each attribute that has changed."
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "hasChanged",
        codeSnippet: "model.hasChanged([attribute])",
        apiText: "Has the model changed since the last 'change' event?"
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "changedAttributes",
        codeSnippet: "model.changedAttributes([attributes])",
        apiText: "Retrieve a hash of only the model's attributes that have changed."
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "previous",
        codeSnippet: "model.previous(attribute)",
        apiText: "During a 'change' event, this method can be used to get the previous value of a changed attribute."
      });


      modelMethods.create({
        typeFoo: "Model",
        typeFooDef: "Models contain the data, logic, conversations, validations, computed properties, and access control",
        method: "previousAttributes",
        codeSnippet: "model.previousAttributes()",
        apiText: "Return a copy of the model's previous attributes."
      });


      modelMethods.create({
        typeFoo: "Collection",
        typeFooDef: "Collections are ordered sets of models",
        method: "extend",
        codeSnippet: "Backbone.Collection.extend(properties, [classProperties])",
        apiText: "To create a Collection class of your own, extend Backbone.Collection, providing instance properties, as well as optional classProperties to be attached directly to the collection's constructor function."
      });


      modelMethods.create({
        typeFoo: "Collection",
        typeFooDef: "Collections are ordered sets of models",
        method: "model",
        codeSnippet: "collection.model",
        apiText: "Override this property to specify the model class that the collection contains."
      });


      modelMethods.create({
        typeFoo: "Collection",
        typeFooDef: "Collections are ordered sets of models",
        method: "constructor / initialize",
        codeSnippet: "new Collection([models], [options])",
        apiText: "When creating a Collection, you may choose to pass in the initial array of models. The collection's comparator function may be included as an option."
      });


      modelMethods.create({
        typeFoo: "Collection",
        typeFooDef: "Collections are ordered sets of models",
        method: "models",
        codeSnippet: "collection.models",
        apiText: "Raw access to the JavaScript array of models inside of the collection."
      });


      modelMethods.create({
        typeFoo: "Collection",
        typeFooDef: "Collections are ordered sets of models",
        method: "toJSON",
        codeSnippet: "collection.toJSON()",
        apiText: "Return an array containing the attributes hash of each model in the collection."
      });


      modelMethods.create({
        typeFoo: "Collection",
        typeFooDef: "Collections are ordered sets of models",
        method: "add",
        codeSnippet: "collection.add(models, [options])",
        apiText: "Add a model (or an array of models) to the collection."
      });


      modelMethods.create({
        typeFoo: "Collection",
        typeFooDef: "Collections are ordered sets of models",
        method: "remove",
        codeSnippet: "collection.remove(models, [options])",
        apiText: "Remove a model (or an array of models) from the collection."
      });


      modelMethods.create({
        typeFoo: "Collection",
        typeFooDef: "Collections are ordered sets of models",
        method: "get",
        codeSnippet: "collection.get(id)",
        apiText: "Get a model from a collection, speciÔ¨Åed by id."
      });


      modelMethods.create({
        typeFoo: "Collection",
        typeFooDef: "Collections are ordered sets of models",
        method: "getByCid",
        codeSnippet: "collection.getByCid(cid)",
        apiText: "Get a model from a collection, speciÔ¨Åed by client id."
      });


      modelMethods.create({
        typeFoo: "Collection",
        typeFooDef: "Collections are ordered sets of models",
        method: "at",
        codeSnippet: "collection.at(index)",
        apiText: "Get a model from a collection, speciÔ¨Åed by index."
      });


      modelMethods.create({
        typeFoo: "Collection",
        typeFooDef: "Collections are ordered sets of models",
        method: "length",
        codeSnippet: "collection.length",
        apiText: "Like an array, a Collection maintains a length property, counting the number of models it contains."
      });


      modelMethods.create({
        typeFoo: "Collection",
        typeFooDef: "Collections are ordered sets of models",
        method: "comparator",
        codeSnippet: "collection.comparator",
        apiText: "If you deÔ¨Åne a comparator, it will be used to maintain the collection in sorted order."
      });


      modelMethods.create({
        typeFoo: "Collection",
        typeFooDef: "Collections are ordered sets of models",
        method: "sort",
        codeSnippet: "collection.sort([options])",
        apiText: "Force a collection to re-sort itself."
      });


      modelMethods.create({
        typeFoo: "Collection",
        typeFooDef: "Collections are ordered sets of models",
        method: "pluck",
        codeSnippet: "collection.pluck(attribute)",
        apiText: "Pluck an attribute from each model in the collection."
      });


      modelMethods.create({
        typeFoo: "Collection",
        typeFooDef: "Collections are ordered sets of models",
        method: "url",
        codeSnippet: "collection.url or collection.url()",
        apiText: "Set the url property (or function) on a collection to reference its location on the server."
      });


      modelMethods.create({
        typeFoo: "Collection",
        typeFooDef: "Collections are ordered sets of models",
        method: "parse",
        codeSnippet: "collection.parse(response)",
        apiText: "Parse is called by Backbone whenever a collection's models are returned by the server, in fetch."
      });


      modelMethods.create({
        typeFoo: "Collection",
        typeFooDef: "Collections are ordered sets of models",
        method: "fetch",
        codeSnippet: "collection.fetch([options])",
        apiText: "Fetch the default set of models for this collection from the server, resetting the collection when"
      });


      modelMethods.create({
        typeFoo: "Collection",
        typeFooDef: "Collections are ordered sets of models",
        method: "reset",
        codeSnippet: "collection.reset(models, [options])",
        apiText: "Adding and removing models one at a time is all well and good, but sometimes you have so many models to change that you'd rather just update the collection in bulk."
      });


      modelMethods.create({
        typeFoo: "Collection",
        typeFooDef: "Collections are ordered sets of models",
        method: "create",
        codeSnippet: "collection.create(attributes, [options])",
        apiText: "Convenience to create a new instance of a model within a collection."
      });


      modelMethods.create({
        typeFoo: "Router",
        typeFooDef: "Router provides methods for routing client-side pages, and connecting them to actions and events.",
        method: "extend",
        codeSnippet: "Backbone.Router.extend(properties, [classProperties])",
        apiText: "DeÔ¨Åne actions that are triggered when certain URL fragments are matched."
      });


      modelMethods.create({
        typeFoo: "Router",
        typeFooDef: "Router provides methods for routing client-side pages, and connecting them to actions and events.",
        method: "routes",
        codeSnippet: "router.routes",
        apiText: "The routes hash maps URLs with parameters to functions on your router"
      });


      modelMethods.create({
        typeFoo: "Router",
        typeFooDef: "Router provides methods for routing client-side pages, and connecting them to actions and events.",
        method: "constructor / initialize",
        codeSnippet: "new Router([options])",
        apiText: "When creating a new router, you may pass its routes hash directly as an option, if you choose."
      });


      modelMethods.create({
        typeFoo: "Router",
        typeFooDef: "Router provides methods for routing client-side pages, and connecting them to actions and events.",
        method: "route",
        codeSnippet: "router.route(route, name, [callback])",
        apiText: "Manually create a route for the router."
      });


      modelMethods.create({
        typeFoo: "Router",
        typeFooDef: "Router provides methods for routing client-side pages, and connecting them to actions and events.",
        method: "navigate",
        codeSnippet: "router.navigate(fragment, [options])",
        apiText: "Call navigate in order to update the URL."
      });


      modelMethods.create({
        typeFoo: "History",
        typeFooDef: "History serves as a global router (per frame) to handle hashchange events or pushState, match the appropriate route, and trigger callbacks.",
        method: "start",
        codeSnippet: "",
        apiText: "Call Backbone.history.start() to begin monitoring hashchange events, and dispatching routes."
      });


      modelMethods.create({
        typeFoo: "Sync",
        typeFooDef: "function that Backbone calls every time it attempts to read or save a model to the server.",
        method: "emulateHTTP",
        codeSnippet: "",
        apiText: ""
      });


      modelMethods.create({
        typeFoo: "Sync",
        typeFooDef: "function that Backbone calls every time it attempts to read or save a model to the server.",
        method: "emulateJSON",
        codeSnippet: "",
        apiText: ""
      });


      modelMethods.create({
        typeFoo: "View",
        typeFooDef: "organize your interface into logical views, backed by models, each of which can be updated independently when the model changes, without having to redraw the page.",
        method: "extend",
        codeSnippet: "Backbone.View.extend(properties, [classProperties])",
        apiText: ""
      });


      modelMethods.create({
        typeFoo: "View",
        typeFooDef: "organize your interface into logical views, backed by models, each of which can be updated independently when the model changes, without having to redraw the page.",
        method: "constructor / initialize",
        codeSnippet: "new View([options])",
        apiText: ""
      });


      modelMethods.create({
        typeFoo: "View",
        typeFooDef: "organize your interface into logical views, backed by models, each of which can be updated independently when the model changes, without having to redraw the page.",
        method: "el",
        codeSnippet: "view.el",
        apiText: "All views have a DOM element at all times (the el property)"
      });


      modelMethods.create({
        typeFoo: "View",
        typeFooDef: "organize your interface into logical views, backed by models, each of which can be updated independently when the model changes, without having to redraw the page.",
        method: "$el",
        codeSnippet: "view.$el",
        apiText: "A cached jQuery (or Zepto) object for the view's element."
      });


      modelMethods.create({
        typeFoo: "View",
        typeFooDef: "organize your interface into logical views, backed by models, each of which can be updated independently when the model changes, without having to redraw the page.",
        method: "setElement",
        codeSnippet: "view.setElement(element)",
        apiText: "Call setElement to apply a Backbone view to a different DOM element."
      });


      modelMethods.create({
        typeFoo: "View",
        typeFooDef: "organize your interface into logical views, backed by models, each of which can be updated independently when the model changes, without having to redraw the page.",
        method: "attributes",
        codeSnippet: "view.attributes",
        apiText: "A hash of attributes that will be set as HTML DOM element attributes on the view's el."
      });


      modelMethods.create({
        typeFoo: "View",
        typeFooDef: "organize your interface into logical views, backed by models, each of which can be updated independently when the model changes, without having to redraw the page.",
        method: "$ (jQuery  or Zepto)",
        codeSnippet: "view.$(selector)",
        apiText: "Function that runs queries scoped within the view's element."
      });


      modelMethods.create({
        typeFoo: "View",
        typeFooDef: "organize your interface into logical views, backed by models, each of which can be updated independently when the model changes, without having to redraw the page.",
        method: "render",
        codeSnippet: "view.render()",
        apiText: "Override this function with your code that renders the view template from model data, and updates this.el with the new HTML."
      });


      modelMethods.create({
        typeFoo: "View",
        typeFooDef: "organize your interface into logical views, backed by models, each of which can be updated independently when the model changes, without having to redraw the page.",
        method: "remove",
        codeSnippet: "view.remove()",
        apiText: "Convenience function for removing the view from the DOM."
      });


      modelMethods.create({
        typeFoo: "View",
        typeFooDef: "organize your interface into logical views, backed by models, each of which can be updated independently when the model changes, without having to redraw the page.",
        method: "make",
        codeSnippet: "view.make(tagName, [attributes], [content])",
        apiText: "Convenience function for creating a DOM element of the given type (tagName)."
      });


      modelMethods.create({
        typeFoo: "View",
        typeFooDef: "organize your interface into logical views, backed by models, each of which can be updated independently when the model changes, without having to redraw the page.",
        method: "delegateEvents",
        codeSnippet: "delegateEvents([events])",
        apiText: "Uses jQuery's delegate function to provide declarative callbacks for DOM events within a view."
      });


      modelMethods.create({
        typeFoo: "View",
        typeFooDef: "organize your interface into logical views, backed by models, each of which can be updated independently when the model changes, without having to redraw the page.",
        method: "undelegateEvents",
        codeSnippet: "undelegateEvents()",
        apiText: "Removes all of the view's delegated events."
      });


      modelMethods.create({
        typeFoo: "Utility",
        typeFooDef: "",
        method: "noConflict",
        codeSnippet: "var backbone = Backbone.noConflict();",
        apiText: "Returns the Backbone object back to its original value."
      });


      modelMethods.create({
        typeFoo: "Utility",
        typeFooDef: "",
        method: "setDomLibrary",
        codeSnippet: "Backbone.setDomLibrary(jQueryNew);",
        apiText: "Tell Backbone to use a particular object as it's DOM / Ajax library."
      });


      var modelMethodsView = new ModelMethodsView({
        collection: modelMethods
      });

      RootView.getInstance().setView(modelMethodsView);


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
      console.dir(contacts);
      var model = contacts.get(id);
      var detailView = new ContactListDetailView({
        model: model
      });
      RootView.getInstance().setView(detailView);
    }
  });
}); 
