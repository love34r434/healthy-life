console.log('form.js is loaded');

document.addEventListener("DOMContentLoaded", function () {
     var sendMessageForm = document.getElementById("sendMessageForm");

    sendMessageForm.addEventListener('change', function () {
        var isFormValid = sendMessageForm.checkValidity();
        console.log('check validity');
        console.log(isFormValid);
        sendMessageForm.querySelector('button[type="submit"]').disabled = !isFormValid;
    });

    sendMessageForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert("Message sent!");
        sendMessageForm.reset();
    });

    var membershipForm = document.getElementById("membershipForm");

    membershipForm.addEventListener('change', function () {
        var isFormValid = membershipForm.checkValidity();
        membershipForm.querySelector('button[type="submit"]').disabled = !isFormValid;
    });

    membershipForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert("Membership Form sent!");
        membershipForm.reset();
    });
});
