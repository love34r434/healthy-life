async function loadContent(pageId, pageTitle) {
    const url = pageId ? `pages/${pageId}.html` : 'pages/index.html';

    fetch(url)
        .then(response => response.text())
        .then(content => {
            document.getElementById('content').innerHTML = content;

            //adding title
            document.getElementById('page-title').textContent = pageTitle || 'Healthy Life';

            //changing url
            window.history.pushState({pageId: pageId}, null, pageId ? `?page=${pageId}` : '/');
        })
        .catch(error => console.error('Error fetching content:', error));
    
    if (pageId === 'contacts') {
        const script = document.createElement('script');
        script.src = 'assets/js/form.js';
        document.getElementById('add-scripts').appendChild(script);
    }
}

window.addEventListener('popstate', function (event) {
    const pageId = event.state ? event.state.pageId : 'index';
    loadContent(pageId, pageTitle);
});

document.addEventListener('DOMContentLoaded', function() {
    loadContent('index', 'Healthy Life');  //default load index.html

    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function () {
            if (window.getComputedStyle(nav).display !== 'none') {
                nav.classList.toggle('active');
            }
        });
    }     
});


