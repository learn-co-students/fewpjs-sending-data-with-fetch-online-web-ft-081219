// Add your code here

function appendToDom(a) {
  document.body.append(a)
};

function submitData(userNameStr, emailStr) {
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({name: userNameStr, email: emailStr})
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(response => {return response.json();})
    .then(function(object) {
      appendToDom(object.id);
    })
    .catch(function(error) {
      document.body.append(error.message);
    });
    
};