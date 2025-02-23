const form = document.querySelector("form");
const isMarried = form.elements.isMarried;
const additionalForm = form.elements.additionalForm;

if (additionalForm) {
  additionalForm.hidden = true;
}

if (isMarried) {
  isMarried.setAttribute("aria-expanded", false);
  isMarried.setAttribute("aria-controls", isMarried.dataset.controls);

  isMarried.addEventListener("click", (event) => {
    let isChecked = event.target.checked;

    if (isChecked) {
      event.target.setAttribute("aria-expanded", true);
      additionalForm.hidden = false;
    } else {
      event.target.setAttribute("aria-expanded", false);
      additionalForm.hidden = true;
    }
  });
}
