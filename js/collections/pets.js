define(['collection', 'models/pet'], function (Collection, Model) {
  return Collection.extend({
    name: 'pets',
    model: Model,
    localStorage: new Backbone.LocalStorage("OurVeryOwnPetsCollection")
  });
});
