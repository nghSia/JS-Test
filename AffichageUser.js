console.log("hello");

function AfficheUsers(){
    fetch('https://randomuser.me/api/?results=100')
    .then((res) => res.json())
    .then(res => {
        const users = res.results;
        const listUserDiv = document.getElementById("listUsers");
        const userList = document.createElement("ul");
        
        users.forEach(user => {
            const listEl = document.createElement("li");
            listEl.innerHTML = `
                <p>Nom : ${user.name.first} <p>
                <p>Prenom : ${user.name.last} <p>
                <p>Tel : ${user.phone} <p>
                <img src="${user.picture.thumbnail}" alt="${user.name.first}">
            `;
            userList.appendChild(listEl);
        });
        listUserDiv.appendChild(userList);
    });  
    //j'ai pas eu le temps pour le popup
}