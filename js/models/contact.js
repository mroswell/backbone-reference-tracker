define(['model'], function (Model) {
  return Model.extend({
    name: 'contact',
    defaults: {
      firstname: "unknown",
      lastname: "unknown",
      phone: "unknown"
    }
  });
});