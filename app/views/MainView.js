app.protos.views.MainView = Backbone.View.extend({
  el: '#container',
  template: _.template($("#mainViewTemplate").html()),
  initialize: function() {
    this.listenTo(app.collections.repos, 'sync', this.render);
  },
  render: function() {
    var html = this.template({
      repos: app.collections.repos.models
    });
    this.$el.html(html);
  }
});
