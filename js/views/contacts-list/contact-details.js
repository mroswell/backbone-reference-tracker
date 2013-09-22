define([
  'view',
  'templates/contacts-list/contact-details'
], function (View, template) {
  return View.extend({
    name: 'contacts-list/contact-details',
    template: template,
    events: {
    	"submit form.personEditForm": function(e){
    	  e.preventDefault();
    	  this.serialize(function(attrs){
    	    this.model.save(attrs);
    	    this.$('.personEditForm').hide();
    	  }, {set: false});
    	},
  	},
  	editPerson: function(){
  	  this.$('.personEditForm').show();
  	  this.populate(); // rather than doing populate here, which we are just showing you... normally you would want to do this in a ready event to avoid any flicker
  	},
  	cancelEdit: function(){
  	  this.$('.personEditForm').hide();
  	  this.populate(); 
  	},
  });
});
