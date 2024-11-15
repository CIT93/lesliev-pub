async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        if(!data.length) {
            console.log("Error with user value") 
        } else{
            onSuccess(data);
        }
    }
    catch (error) {
        console.log(`Error: ${error}`)
    }
}

getUsers();

function renderUsers(data) {
    data.forEach((user) => {
        const usersEl = document.createElement("h1")
        usersEl.textContent = (`User ${user.name} 's  email is ${user.email}`)
        document.getElementById("output").appendChild(usersEl)
    })
}

function onSuccess(data){
    renderUsers(data);
}

function onError(error) {
    console.log(`Error ${error}`);
}