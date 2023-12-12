// loading content
async function loadContent(pageId, pageTitle, headerTitle) {
    try {
        const response = await fetch(`/healthy-life/pages/${pageId}.html`);
        if (!response.ok) {
            throw new Error(`Error loading page: ${response.statusText}`);
        }
        const content = await response.text();
        document.getElementById('content').innerHTML = content;
    } catch (error) {
        console.error(error);
    }
}

// default load pages/index.html
document.addEventListener('DOMContentLoaded', function() {
    loadContent('index');
});
