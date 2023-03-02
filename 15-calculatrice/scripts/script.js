let form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", (event) => {
  // Empêche l'envoie du formulaire
  event.preventDefault();
  
  const formData = new FormData(form);
  var res = eval(formData.get("equation"));
  form.getElementsByTagName("input")[0].value += "=" + res;
})
