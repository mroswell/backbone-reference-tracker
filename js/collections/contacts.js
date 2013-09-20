define(['collection', 'models/contact'], function (Collection, Model) {
  return Collection.extend({
    name: 'contacts',
    model: Model
  });
});
