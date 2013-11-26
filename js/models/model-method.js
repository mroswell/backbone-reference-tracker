define(['model'], function (Model) {
  return Model.extend({
    name: 'model-method',
    defaults: {
    	typeFoo: "Model",
    	method: "none given",
      codeSnippet: "none given",
      apiText: "none given"
    }
  });
});
