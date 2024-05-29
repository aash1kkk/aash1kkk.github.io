const scriptURL = 'https://script.google.com/macros/s/AKfycbxH8yq5r4WYpItsM531HKnpVAr4wkCCeVrrqPeMSx-q-uSQEGFFWcJAZt159zN_dMul/exec'
const form = document.forms['yes']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})