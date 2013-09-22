Welcome! We're starting the contacts list tutorial from the todo-list generator project to make sure there aren't any hiccups or typos getting stuff rendered initially. There are a bunch of files you'll need to rename and a little bit of code to delete, but it's much faster than going through all the steps we went through in the first tutorial to get you there. Go ahead and rename the following files and folders to contacts-list rather than todo-list for consistency:

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
		I have a friend named {{firstname}} {{lastname}} who I hit up at {{phone}}
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

The 'this' keyword will refer to an instance of the parent view here - so 'currentInstanceOfTheParentView.contactForm will be an instance of our child view. Lastly, let's use the `{{view}}` template helper to get the child template into the parent's template:

		{{#collection}}
			I have a friend named {{firstname}} {{lastname}} who I hit up at {{phone}}
		{{/collection}}
		{{view contactForm}}



















