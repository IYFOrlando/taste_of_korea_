document.addEventListener("DOMContentLoaded", function () {
  var contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var formData = new FormData(contactForm);
    var emailBody =
      "Name: " +
      formData.get("name") +
      "\n" +
      "Email: " +
      formData.get("email") +
      "\n" +
      "Subject: " +
      formData.get("subject") +
      "\n\n" +
      "Message: " +
      formData.get("message");

    var mailtoLink =
      "mailto:orland@iyfusa.org" +
      "?subject=" +
      encodeURIComponent(formData.get("subject")) +
      "&body=" +
      encodeURIComponent(emailBody);

    window.location.href = mailtoLink;

    // Note: This method will open the user's default email client,
    // but it won't provide feedback about whether the email was sent successfully.
  });
});
