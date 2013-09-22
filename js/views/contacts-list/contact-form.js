define([
  'view',
  'templates/contacts-list/contact-form'
], function (View, template) {
  return View.extend({
    name: 'contacts-list/contactForm',
    template: template,
    events: {
    	"submit form": function(event){
      	event.preventDefault();
      	this.serialize(function(attrs){
      		this.$('input').val('');
      		this.collection.create(attrs, {
      	  	success: function(model, response, options){console.log(attrs);}
      		});
    		});
    	}
  	}
  });
});
