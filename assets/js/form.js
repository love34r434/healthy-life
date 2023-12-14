document.addEventListener("DOMContentLoaded", function () {
    // Делегирование событий для ввода в формах
    document.addEventListener("input", function (event) {
        var form = event.target.form;

        if (form && (form.id === "sendMessageForm" || form.id === "membershipForm")) {
            handleFormInput(form);
        }
    });

    // Делегирование событий для отправки форм
    document.addEventListener("submit", function (event) {
        event.preventDefault(); // предотвратить стандартное поведение отправки формы
        var form = event.target;

        if (form && (form.id === "sendMessageForm" || form.id === "membershipForm")) {
            handleFormSubmit(form);
        }
    });

    // Обработка ввода в форме
    function handleFormInput(form) {
        var isFormValid = form.checkValidity();
        form.querySelector('button[type="submit"]').disabled = !isFormValid;
    }

    // Обработка отправки формы
    function handleFormSubmit(form) {
        var formType = form.id === "sendMessageForm" ? "Message" : "Membership Form";
        alert(formType + " sent!");
        form.reset();
    }
});
