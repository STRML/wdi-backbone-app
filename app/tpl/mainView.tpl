<div class="repos">
  <% _.each(repos, function(repo) { %>
    <div class="repo">
      <div class="title"><%= repo.name %></div>
      <div class="object">Object:
        <pre><code><%= JSON.stringify(repo) %></code></pre>
      </div>
    </div>
  <% }); %>
</div>
