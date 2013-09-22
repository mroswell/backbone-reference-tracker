Ryan - may this help you gain hundreds of contributors! And may your framework be bug free that you never need them.

Welcome! We're starting the contacts list tutorial from the todo-list generator project to make sure there aren't any hiccups getting stuff rendered initially. Thanks to Rob Gerstenberger for invaluable input. There are a bunch of files you'll need to rename and a little bit of code to delete, but it's much faster than going through all the steps we went through in the first tutorial to get you there. You could even leave the names as they are, since it doesn't really matter too much. If you like, go ahead and rename the following files and folders to contacts-list rather than todo-list for consistency:

* js/routers/todo-list.js
* js/views/todo-list/index.js
* js/templates/todo-list/index.js
* css/todo-list.css
* in the define function of the router, remove the reference to todo-list
* in main.js, remove the reference to todo-list
* in the view/todo-list/index.js file, remove references
* in index.html, the link tag has a reference
* if you miss one, run a recursive search on your directory and find it.

Sorry for the tedium, but it's simpler! Only took ten minutes to do. Ryan, may be better to make a new generator - I rather like starting with the code they already know with ZERO jumps... every single step outlined... they'll probably start with this when they make their own project anyway and have to change the names... 

This tutorial picks up where the first one (non persistent todo app) left off. We're going to modify our todo-list to be a contacts list, using the project we already understand intimately. Delete the old code in each file as you go and replace it with the new code. First things first, we need to create a 'contact' model...

		$ yo thorax:model contact

...and populate it with defaults:

		define(['model'], function (Model) {
		  return Model.extend({
		    name: 'contact',
		    defaults: {
		      firstName: "unknown",
		      lastName: "unknown",
		      phone: "unknown"
		    }
		  });
		});

Let's instantiate a model in our router...

		define([
		  'backbone',
		  'views/root',
		  'models/contact',
		  'views/contacts-list/index'
		], function(Backbone, RootView, ContactModel, ContactListIndexView) {
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


...and then add the model attributes to our template `js/templates/index.hbs`: 

		I have a friend named {{firstname}} {{lastname}} who I hit up at {{number}}

Fire it up with `$ npm start`. Debug if necessary - WebKit DevTools is useful, and do take the time to install the Thorax Chrome Plugin. If you're getting 'no such file or directory' messages, do a recursive search for the file name or directory it says isn't there and you'll discover where you've gone wrong in naming. [have walmart team brainstorm debug techniques for require if you like]. Model attributes directly accessible in our template! 

Let's get a collection going:

		$ yo thorax:collection contacts

In the newly generated `js/collections/contacts.js`:

		define(['collection', 'models/contact'], function (Collection, Model) {  //pass in the contact model
		  return Collection.extend({
		    name: 'contacts',
		    model: Model  //set it as an attribute of the collection
		  });
		});

Now, we can [instantiate a model by passing values into our collection in the router](http://backbonejs.org/#Collection-model). Let's do that, and change the view property from model to collection:

		define([
		  'backbone',
		  'views/root',
		  'collections/contacts',  //swap the model for the collection 
		  'views/contacts-list/index'
		], function(Backbone, RootView, ContactCollection, ContactListIndexView) {  //swap here also
		  return Backbone.Router.extend({
		    routes: {
		      "": "index"
		    },
		    index: function() {
		      var contacts = new ContactCollection();  //instantiate the collection
		      contacts.add({firstname: "Barack", lastname: "Obama", phone: "(333) 111 4444"})  //add a model
		      contacts.add({firstname: "Hillary", lastname: "Clinton", phone: "(999) 222 2222"})  //add another
		      var view = new ContactListIndexView({
		        collection: contacts  //
		      });
		      RootView.getInstance().setView(view);
		    }
		  });
		}); 

We're cruising now, and we need to render the collection - we'll now use a handlebars block helper in the template like we did in the first tutorial:

		{{#collection}}
		  <li> I have a friend named {{firstname}} {{lastname}} who I hit up at {{phone}} </li>
		{{/collection}}

`$ npm start`, and you should have two contacts on screen. This concludes the first part of this tutorial: we've now successfully used models, collections, views, routers and templates, and have seen how they relate to each other using RequireJS syntax. Onto CRUD! Next, we'll explore the syntax for adding a child view to handle the 'create' functionality. Best practice: one view, one objective. Here, we'll create a form that adds a model to our collection: 

		$ yo thorax:view contacts-list/contact-form

You'll see that this generated two files:

    $ create js/views/contacts-list/contact-form.js
    $ create js/templates/contacts-list/contact-form.hbs

This time, we'll start with `js/templates/contacts-list/contact-form.hbs`...

		<form>
		  <label>
		    First
		    <input type="text" name="firstname">  <!-- ALL inputs must have name attributes. Super important. Seriously. -->
		  </label>
		  <label>
		    Last
		    <input type="text" name="lastname"> 
		  </label>
		  <label>
		    Phone
		    <input type="text" name="phone"> 
		  </label>
		    <button type="submit"> Add </button>
		</form>

...to which we'll add a form. Don't forget those name attributes, which will be critical when we call our `serialize` next. Serialize is going to grab the values of the inputs and turn them into JSON, which is what our Backbone models want. With this out of the way we'll turn to our view:

		define([
		  'view',
		  'templates/contacts-list/contact-form'
		], function (View, template) {
		  return View.extend({
		    name: 'contacts-list/contactForm', //does not have the dash we used in the generator - camel capped is equivelent
		    template: template,
		    events: {
		    	"submit form": function(event){  //an event! when we submit the form...
		      	event.preventDefault();  //prevent the default behavior...
		      	this.serialize(function(attrs){  //call the serialize method on the current instance of the view
		      		this.$('input').val('');  //clear the inputs...
		      		this.collection.create(attrs, {  //'create' - which is a combination of 'add' & 'save' a new model
		      	  	success: function(model, response, options){console.log(attrs);}  //console log on success
		      		});
		    		});
		    	}
		  	}
		  });
		});

Let's give this child a home! In `js/views/contacts-list/index.js` we'll instantiate it whenever that view is initialized...

		define([
		  'view',
		  'templates/contacts-list/index',
		  'views/contacts-list/contact-form'  //add here...
		], function(View, template, ContactFormChildView) {  //...and here!
		  return View.extend({
		    name: "contacts-list/index",
		    template: template,
		    events: {
		    },
		    initialize: function(){
		      this.contactForm = new ContactFormChildView({  
		        collection: this.collection  //set the child view's collection to the parent's collection
		      })
		    }
		  });
		});

`this` will refer to an instance of the parent view here - so `currentInstanceOfTheParentView.contactFor` will be an instance of our child view. Lastly, let's use the `{{view}}` template helper to get the child template into the parent's template:

		{{#collection}}
			<li> I have a friend named {{firstname}} {{lastname}} who I hit up at {{phone}} </li>
		{{/collection}}
		{{view contactForm}}

`$ npm start` and debug if necessary to see your working form. If you add one with the Chrome inspector open, you should see it throw the following error: `Uncaught Error: A "url" property or function must be specified` - and why shouldn't it? We've not yet told it where to save our models. For this example, we'll use `Backbone.localStorage`, which is a Backbone plugin we'll install by running `$ bower install backbone.localStorage` from within our project directory. Since we'll also need to add this to `Gruntfile.js`, this is a good time to break down the `options` object in the require config function:

    var options = {
      appDir: paths.js,
      baseUrl: './',          //***BY DEFAULT, ALL PATHS YOU GIVE REQUIRE ARE RELATIVE TO PUBLIC/INDEX.HTML***
      dir: paths.output.js,
      modules: [
        {
          name: 'main'
        } 
      ],
      paths: {  //***shorten things up so that you're not writing these paths in every define statement***
        'jquery': '../bower_components/jquery/jquery',
        'underscore': '../bower_components/underscore/underscore',
        'handlebars': '../bower_components/handlebars/handlebars.runtime',
        'backbone': '../bower_components/backbone/backbone',
        'thorax': '../bower_components/thorax/thorax',
        'bootstrap': '../bower_components/bootstrap/js/bootstrap',
        'localstorage': '../bower_components/backbone.localStorage/backbone.localStorage'
      },
      shim: {  //***anything not written as a require module has to go here, ie., third party libraries***
        'handlebars': {
          exports: 'Handlebars'
        },
        'backbone': {
          exports: 'Backbone',
          deps: ['jquery', 'underscore']
        },
        'underscore': {
          exports: '_'
        },
        'thorax': {
          exports: 'Thorax',
          deps: ['handlebars', 'backbone']
        },
        'bootstrap': {
          deps: ['jquery']
        },
        'localstorage': {  //***here's our backbone.localStorage adapter!***
          deps: ['backbone']  //***we'll tell require to load this script after it loads backbone***
        }
      }
    };

Next, we'll need to ammend the [`url` property of the collection](http://backbonejs.org/#Collection-url) so that it hits localstorage rather than a REST route: 

		define(['collection', 'models/contact', 'localstorage'], function (Collection, Model, localstorage) {
		  return Collection.extend({
		    name: 'contacts',
		    model: Model,
		    localStorage: new Backbone.LocalStorage("OurVeryOwnContactsCollection")  //booya.
		    // url: "/people"  <-- replace local storage with your REST routes when you're hitting a server
		  });
		});

`$ npm start` and, if successful, you should be able to see entries inserted into local storage (in DevTools, check Resources > Session Storage > http://localhost:8000). We've issued a `POST` and `CREATE` is taken care of - let's issue our `GET` and take down `READ`:

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
		      contacts.fetch();  //READ
		      var view = new ContactListIndexView({
		        collection: contacts
		      });
		      RootView.getInstance().setView(view);
		    }
		  });
		}); 

You can remove the old code instantiating your play data, lest the values be inserted local storage each time the application runs. Your data should now be persisting between builds. Let's do `DELETE`:

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
		      $(event.target).model().destroy();  //extension of the $ gets you the nearest bound model
		    }
		  });
		});

Insert the `handleDelete` method into `js/views/index.js`. We now have a method on the view, but how do we trigger it? In the template:

		{{#collection}}
			<li> I have a friend named {{firstname}} {{lastname}} who I hit up at {{phone}} </li>
			{{#button "handleDelete"}}Delete{{/button}}  {{!-- see thorax API for a list of all custom template helpers --}}
		{{/collection}}
		{{view contactForm}}

A `DELETE` is issued when the button is clicked - our data is gone. Let's finish up with `UPDATE` and issue a `PUT`. We'll first take a brief detour to demonstrate how to add a new route [based on the `id` of a model](http://backbonejs.org/#Model-id). First, let's nuke the index view in favor of a 'detail' view we'll add. This means a new view, template and method in the router. Starting with the view: 

		$ yo thorax:view contacts-list/contact-details

We need a way to get to the page, so let's make each of the sentences we're constructing in our `index.hbs` template a link using another custom handlebars helper: 

		{{#collection}}
			{{#link "details/{{id}}" expand-tokens=true}} 
			  <li> I have a friend named {{firstname}} {{lastname}} who I hit up at {{phone}} </li> 
			{{/link}}
			{{#button method="handleDelete"}}Delete{{/button}}
		{{/collection}}
		{{view contactForm}}

So, in plain English - as we loop through the collection, each list item will become a link to the route `#details/the_id_of_the_current_model`. [See the BackboneJS site on the hashtag and the use of params](http://backbonejs.org/#Router-routes). Just like our `{{button}}` helper, our `{{link}}` helper is firing a method - this time on the router and with an argument of `id`. Let's take a look at the router and follow that `id`'s journey:

		define([
		  'backbone',
		  'views/root',
		  'collections/contacts',
		  'views/contacts-list/index',
		  'views/contacts-list/contact-details'  //add the new view to the deps
		], function(Backbone, RootView, ContactCollection, ContactListIndexView, ContactListDetailView) {  //& to the args
		  return Backbone.Router.extend({
		    routes: {
		      "": "index"
		    },
		    index: function() {
		      var contacts = new ContactCollection();
		      contacts.fetch();
		      var view = new ContactListIndexView({
		        collection: contacts
		      });
		      RootView.getInstance().setView(view);
		    },
		    details: function(id){  													//we'll hit the route with {{id}}
		      var detailView = new ContactListDetailView({		//and instantiate the detail view
		        model: ContactCollection.get(id)							//set the model to the id passed into {{#link}}
		      });
		      RootView.getInstance().setView(detailView);			//nuke the old view and put the new one in place
		    }
		  });
		}); 

And in contact-details, we'll add a bunch of new code dealing with validation and `UPDATE`:














