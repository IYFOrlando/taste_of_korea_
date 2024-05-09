document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);

    fetch(contactForm.getAttribute("action"), {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          contactForm
            .querySelector(".contact-form-success")
            .classList.remove("d-none");
          contactForm.reset();
        } else {
          contactForm
            .querySelector(".contact-form-error")
            .classList.remove("d-none");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        contactForm
          .querySelector(".contact-form-error")
          .classList.remove("d-none");
      });
  });
});

console.log("Form Handler");
