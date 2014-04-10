window.app = {
  protos: {
    models: {},
    collections: {},
    routers: {},
    views: {}
  },
  models: {},
  collections: {},
  routers: {},
  views: {}
};

function init() {
  _.extend(window.app, Backbone.Events);
  // Proto definitions
  window.app.routers.main = new window.app.protos.routers.MainRouter();
  window.app.once('init', function(){
    // Start routing
    Backbone.history.start({pushState: false});
  });
}


$(init);
