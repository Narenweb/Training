const router = async () => {
    const routes = [
      { path: '/', view: () => console.log("viewing Dashboard") },
      { path: '/posts', view: () => console.log("viewing Posts") },
      { path: '/settings', view: () => console.log("viewing Settings") },
    ];
    // Create an array of potential matches with the current route and its match status
    const potentialMatches = routes.map(route => {
      return {
        route: route,
        isMatch: location.pathname === route.path
      };
    });
  
    // Find the first matching route
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
  
    // If no match is found, set the default route to the first route in the routes array
    if (!match) {
      match = {
        route: routes[0],
        isMatch: true
      };
    }
  
    // Log the matched route's path to the console
    console.log(match.route.view());
  };
  
  // Call the router function when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    router();
  });
  