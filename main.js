// loading content
async function loadContent(pageId, pageTitle, headerTitle) {
    const url = pageId ? `/pages/${pageId}.html` : '/pages/index.html';

    fetch(url)
        .then(response => response.text())
        .then(content => {
            document.getElementById('content').innerHTML = content;
            // add title
            document.getElementById('page-title').textContent = pageTitle || 'Healthy Life Support Community';
            // add header
            document.getElementById('header-title').textContent = headerTitle || '';

            //changing url
            window.history.pushState({ pageId: pageId}, null, pageId ? `?page=${pageId}` : '/');
        })
        .catch(error => console.error('Error fetching content:', error));
}



window.addEventListener('popstate', function (event) {
    const pageId = event.state ? event.state.pageId : 'index';
    loadContent(pageId, pageTitle, headerTitle);
    // highlightCurrentPage(pageId);
});


// default load pages/index.html
document.addEventListener('DOMContentLoaded', function() {
    loadContent('index', 'Healthy Life Support Community', '');
});
