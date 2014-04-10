var app = window.app;
app.protos.routers.MainRouter = Backbone.Router.extend({
  organization: 'ga-students',
  routes: {
    'repos': 'viewRepos',
    'repos/:id': 'viewRepo'
  },
  initialize: function() {
    // Initialize models, collections, and so on
    app.collections.repos = new app.protos.collections.RepoCollection(null, {
      org: 'ga-students'
    });

    // Set conditions for 'init' event
    app.collections.repos.once('sync', function() {
      window.app.trigger('init');
    });

    // Fetch data
    app.collections.repos.fetch();
  },
  viewRepos: function() {
    app.views.main = new app.protos.views.MainView();
    app.views.main.render();
  },
  viewRepo: function(id) {
    app.views.main = new app.protos.views.RepoView({
      model: app.collections.repos.get(id)
    });
    app.views.main.render();
  }
});
