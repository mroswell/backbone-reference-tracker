define(['collection', 'models/contact', 'localstorage'], function (Collection, Model, localstorage) {
  return Collection.extend({
    name: 'contacts',
    model: Model,
    localStorage: new Backbone.LocalStorage("OurVeryOwnContactsCollection")
  });
});
