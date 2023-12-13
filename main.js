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
}

window.addEventListener('popstate', function (event) {
    const pageId = event.state ? event.state.pageId : 'index';
    loadContent(pageId, pageTitle);
});

//default load pages/index.html
document.addEventListener('DOMContentLoaded', function() {
    loadContent('index', 'Healthy Life');
});