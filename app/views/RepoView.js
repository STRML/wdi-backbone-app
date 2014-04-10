app.protos.views.RepoView = Backbone.View.extend({
  el: '#container',
  template: _.template($("#repoViewTemplate").html()),
  initialize: function() {
  },
  render: function() {
    var html = this.template({
      repo: this.model
    });
    this.$el.html(html);
  }
});
