async function loadContent(pageId) {
    const url = pageId ? `pages/${pageId}.html` : 'pages/index.html';

    fetch(url)
        .then(response => response.text())
        .then(content => {
            document.getElementById('content').innerHTML = content;

            // adding title
            const pageTitleElement = document.getElementById('title-of-page');
            const pageTitle = pageTitleElement ? pageTitleElement.textContent : 'Healthy Life';
            document.getElementById('page-title').textContent = pageTitle;

            // changing url
            window.history.pushState({ pageId: pageId }, null, pageId ? `?page=${pageId}` : 'index');

            // load script for form and accordion if the page is 'contact'
            if (pageId === 'contact') {
                const script = document.createElement('script');
                script.src = 'assets/js/form.js';
                script.onload = function () {
                    // Code to run after form.js is loaded
                    console.log('form.js has been loaded.');
                };
                document.getElementById('add-scripts').appendChild(script);
            }
        })
        .catch(error => console.error('Error fetching content:', error));
}

document.addEventListener('DOMContentLoaded', function () {
    // Initial load of the page
    const initialPageId = getPageIdFromUrl(); 
    loadContent(initialPageId);
});

window.addEventListener('popstate', function (event) {
    const pageId = event.state ? event.state.pageId : 'index';
    loadContent(pageId);
});

function getPageIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('page') || 'index';
}
