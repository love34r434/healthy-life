document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((currentAccordion) => {
        currentAccordion.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const targetForm = document.getElementById(targetId);
            const otherForms = document.querySelectorAll(".contactForm:not(#" + targetId + ")");

            //Toggle the visibility of the target form
            if (targetForm.style.display === "block") {
                targetForm.style.display = "none";
                this.textContent = "Show Form";
            } else {
                targetForm.style.display = "block";
                this.textContent = "Hide Form";
            }

            //Hide other Forms
            otherForms.forEach((form) => (form.style.display = "none"));
        });
    });

    var acc = document.querySelector(".accordion");
    var panel = document.querySelector(".panel");

    acc.addEventListener("click", function () {
        panel.style.display =
            panel.style.display === "block" ? "none" : "block";
    });

    var sendMessageForm = document.getElementById("sendMessageForm");

    sendMessageForm.addEventListener("input", function () {
        var isFormValid = sendMessageForm.checkValidity();
        sendMessageForm.querySelector('button[type="submit"]').disabled =
            !isFormValid;
    });

    sendMessageForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Form sent!");
        sendMessageForm.reset();
    });

    var membershipForm = document.getElementById("membershipForm");

    membershipForm.addEventListener("input", function () {
        var isFormValid = membershipForm.checkValidity();
        membershipForm.querySelector('button[type="submit"]').disabled =
            !isFormValid;
    });

    membershipForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Membership Form sent!");
        membershipForm.reset();
    });
});
