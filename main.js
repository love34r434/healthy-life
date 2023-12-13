// loading content
async function loadContent(pageId, pageTitle) {
    const url = pageId ? `pages/${pageId}.html` : 'pages/index.html';

    fetch(url)
        .then(response => response.text())
        .then(content => {
            document.getElementById('content').innerHTML = content;
            // add title
            document.getElementById('page-title').textContent = pageTitle || 'Healthy Life Support Community';
           
            //changing url
            window.history.pushState({ pageId: pageId}, null, pageId ? `?page=${pageId}` : '/');
        })
        .catch(error => console.error('Error fetching content:', error));
}



window.addEventListener('popstate', function (event) {
    const pageId = event.state ? event.state.pageId : 'index';
    loadContent(pageId, pageTitle);
    // highlightCurrentPage(pageId);
});


// default load pages/index.html
document.addEventListener('DOMContentLoaded', function() {
    loadContent('index', 'Healthy Life Support Community');
});

// accordions and form validator
document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const targetForm = document.getElementById(targetId);
            const otherForms = document.querySelectorAll('.contactForm:not(#' + targetId + ')');

            // Toggle the visibility of the target form
            targetForm.style.display = targetForm.style.display === 'block' ? 'none' : 'block';

            // Hide other forms
            otherForms.forEach(form => form.style.display = 'none');
        });
    });

    var acc = document.querySelector('.accordion');
    var panel = document.querySelector('.panel');

    acc.addEventListener('click', function () {
        panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
    });

    var sendMessageForm = document.getElementById('sendMessageForm');

    sendMessageForm.addEventListener('input', function () {
        var isFormValid = sendMessageForm.checkValidity();
        sendMessageForm.querySelector('button[type="submit"]').disabled = !isFormValid;
    });

    sendMessageForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Message sent!');
        sendMessageForm.reset();
    });
});