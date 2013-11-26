define(['collection', 'models/model-method'], function (Collection, Model) {
  return Collection.extend({
    name: 'model-methods',
    model: Model,
    localStorage: new Backbone.LocalStorage("OurVeryOwnModelMethodsCollection")
  });
});
