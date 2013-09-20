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

Sorry for the tedium, but it's simpler! Only took a few minutes to do. Ryan, obviously better to make a new generator, but if you don't get to it... here you are. This tutorial picks up where the first one (non persistent todo app) left off. We're going to modify our todo-list to be a contacts list, using the project we already understand intimately. Delete the old code in each file as you go and replace it with the new code. First things first, we need to create a 'contact' model...

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

		I have a friend named {{firstname}} {{lastname}} and I hit him up at {{number}}

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


























{{!-- 


{{#collection tag="ul"}}
  <li {{#done}}class="done"{{/done}}>
    <input type="checkbox" {{#done}}checked{{/done}}>
    {{title}}
  </li>
{{/collection}}

}}


<form>
  <input name="title">
  <input type="submit" value="Add">
</form>


