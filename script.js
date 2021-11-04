const submitForm = document.querySelector('form');
submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! I'll be in touch.");
});

// I tried to add functionality to the form submission using an if/else statement to return an alert with "Please fill out the input fields" if the input fields with an ID of "jsForm" were blank by using '', and otherwise, to return the alert of "thanks for reaching out! I'll be in touch." How would I most easily go about clearing the forms, and also sending an alternate alert pop up if the forms aren't filled out properly? I've tried searching and experimenting but seem to keep breaking the javascript when I try to use similar code from other projects or create my own.

// Thanks! 