var app = window.app;
app.protos.collections.RepoCollection = Backbone.Collection.extend({
  model: app.protos.models.Repo,
  initialize: function(models, options) {
    this.options = options;
  },
  url: function() {
    return 'https://api.github.com/orgs/' + this.options.org + '/repos';
  }
});
