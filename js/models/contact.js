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