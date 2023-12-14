async function loadContent(pageId) {
    const url = pageId ? `pages/${pageId}.html` : 'pages/index.html';

    fetch(url)
        .then(response => response.text())
        .then(content => {
            document.getElementById('content').innerHTML = content;

            //adding title
            const pageTitleElement = document.getElementById('title-of-page');
            const pageTitle = pageTitleElement ? pageTitleElement.textContent : 'Healthy Life';
            document.getElementById('page-title').textContent = pageTitle;

            //changing url
            window.history.pushState({pageId: pageId}, null, pageId ? `?page=${pageId}` : '/');
        })
        .catch(error => console.error('Error fetching content:', error));
        
    //load script for form and accordion
    if (pageId === 'contact') {
        var sendMessageForm = document.getElementById("sendMessageForm");

        sendMessageForm.addEventListener("input", function () {
            console.log('input');
            var isFormValid = sendMessageForm.checkValidity();
            console.log(isFormValid);
            sendMessageForm.querySelector('button[type="submit"]').disabled = !isFormValid;
        });
    
        sendMessageForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Message sent!");
            sendMessageForm.reset();
        });
    
        var membershipForm = document.getElementById("membershipForm");
    
        membershipForm.addEventListener("input", function () {
            var isFormValid = membershipForm.checkValidity();
            membershipForm.querySelector('button[type="submit"]').disabled = !isFormValid;
        });
    
        membershipForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Membership Form sent!");
            membershipForm.reset();
        });
    }
}

window.addEventListener('popstate', function (event) {
    const pageId = event.state ? event.state.pageId : 'index';
    loadContent(pageId);
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


