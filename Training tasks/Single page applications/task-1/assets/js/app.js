document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app');
  
    function showView(viewId) {
      const views = document.querySelectorAll('.view');
      views.forEach(view => view.style.display = 'none');
      
      const viewToShow = document.getElementById(viewId);
      viewToShow.style.display = 'block';
    }
  
    function navigateToView(event) {
      event.preventDefault();
      const targetView = event.target.getAttribute('href').substring(1);
      history.pushState({}, '', event.target.getAttribute('href'));
      
      // Fetch the content of the view dynamically
      fetch(`${targetView}.html`)
        .then(response => response.text())
        .then(html => {
          appContainer.innerHTML = html;
          showView(targetView);
        })
        .catch(error => console.error('Error fetching view:', error));
    }
  
    window.addEventListener('popstate', () => {
      const viewId = window.location.hash.substring(1);
      
      // Fetch the content of the view dynamically
      fetch(`${viewId}.html`)
        .then(response => response.text())
        .then(html => {
          appContainer.innerHTML = html;
          showView(viewId);
        })
        .catch(error => console.error('Error fetching view:', error));
    });
  
    // Add event listeners to navigation links
    const navigationLinks = document.querySelectorAll('nav a');
    navigationLinks.forEach(link => link.addEventListener('click', navigateToView));
  
    // Show initial view based on the current URL
    const initialViewId = window.location.hash.substring(1);
    if (initialViewId) {
      // Fetch the content of the view dynamically
      fetch(`${initialViewId}.html`)
        .then(response => response.text())
        .then(html => {
          appContainer.innerHTML = html;
          showView(initialViewId);
        })
        .catch(error => console.error('Error fetching view:', error));
    }
  });
  