app.protos.models.Repo = Backbone.Model.extend({
  toString: function(options) {
    if (options && options.short) {
      return JSON.stringify(this.toJSON()).slice(0, 100) + '...';
    }
    return JSON.stringify(this.toJSON(), undefined, 2);
  }
});
