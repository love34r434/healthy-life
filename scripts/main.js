// loading content
async function loadContent(pageId, pageTitle, headerTitle) {
    const content = await fetch(`pages/${pageId}.html`).then(response => response.text());
    document.getElementById('content').innerHTML = content;
}

// default load pages/index.html
document.addEventListener('DOMContentLoaded', function() {
    loadContent('index');
});
