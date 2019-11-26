// Add your code here

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    submitData();
    postData();
});


function submitData() {
    return fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "name": "Steve",
                "email": "steve@steve.com"
            })
        })
        .then(response => response.json())
        .then(object => {
            console.log(object);
            postData(object);
        })
        .catch(function (error) {
            console.log(error.message);
        });
}

function postData(object) {
    const myBody = document.querySelector("body")
    const myH1 = document.createElement("h1")
    myH1.innerText = `name: ${object.name} 
    email: ${object.email}`
    myBody.appendChild(myH1)
}