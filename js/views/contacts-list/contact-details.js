define([
  'view',
  'templates/contacts-list/contact-details'
], function (View, template) {
  return View.extend({
    name: 'contacts-list/contact-details',
    template: template,
    events: {
      "submit .personEditForm": function(e){
        e.preventDefault();
        this.serialize(function(attrs){  //thorax method that turns inputs into JSON with name attribute as key
          this.model.save(attrs, {  //object with success and error methods
            success: function(model, response, options){
              console.dir(model);
              console.dir(response);
              console.dir(options);
            },
            error: function(model, xhr, options){
              console.dir(model);
              console.dir(xhr);
              console.dir(options);
            }
          });  //issues a PUT if the model already exists
          //this.model.trigger('change')  //**WTF - PUTTING THIS IN MEANS YOU CAN REMOVE {set: false}**
          console.log(attrs); //take a look at what serialize() is sending over
          this.$('input[type=text]').val('');  //clear the form
          this.$('.personEditForm').hide();  //hide the form
        }, {set: false}); //**WTF - CHECK THIS OUT RYAN - DOES NOT FIRE CHANGE EVENT WITHOUT THIS? WHY?**
      },
    },
    editPerson: function(){
      this.$('.personEditForm').show();
      //this.populate(); // rather than doing populate here, which we are just showing you... normally you would want to do this in a ready event to avoid any flicker
    },
    cancelEdit: function(){
      this.$('input[type=text]').val('');
      this.$('.personEditForm').hide();
    },
  });
});