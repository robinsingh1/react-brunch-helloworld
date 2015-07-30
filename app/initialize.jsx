var routes = require('routes');


document.addEventListener('DOMContentLoaded', function() {
  console.log("lol")
  ReactRouter.run(routes, ReactRouter.HashLocation, function(Root) {
    React.render(<Root/>, document.body);
  });
}, false);
