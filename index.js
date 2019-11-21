function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: `${name}`,
      email: `${email}`,
    }),
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      // find the new id and append this value to the DOM.
      console.log(object)
      document.body.innerHTML = object["id"];
    })
    .catch(function(error) {
      document.body.innerHTML = error.message;
    });
}
