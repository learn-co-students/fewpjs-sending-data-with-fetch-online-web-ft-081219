// Add your code here

function submitData(name, email){
    let obj= JSON.stringify({name: name, email: email})
    let params = {
        method: "POST",
       headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({name: name, email: email})
    };
    fetch("http://localhost:3000/users",params)
    .then(resp => { if (!resp.ok) { throw resp };return resp.json()})
    .then(json => {addNewuser(json); return fetch("http://localhost:3000/users",params)})
    .catch(e => {document.body.append("Unauthorized Access")})
}
// return fetch("http://localhost:3000/users",params
function addNewuser(body){

        document.querySelector("body").append(" " + body.email)
        document.querySelector("body").append(" " + body.name)
        document.querySelector("body").append(body.id)

        body.id
}