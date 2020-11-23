
const body = document.querySelector('body')
const userURL = "http://localhost:3000/users"
const patchURL = `${userURL}/${user.id}`
const userForm = document.querySelector('form')
const head = document.querySelector('head')
const title = document.querySelector('#title')



userForm.addEventListener('submit', (event) => { 
    handleForm(userForm)
})

function handleForm(userForm){
    const newUserData = new FormData(userForm)
    const newUser = newUserData.get('username')
    
    saveNewUser(newUser)
}

function saveNewUser(user){
    fetch(userURL, {
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: user})
    })
    onStart()
}

function onStart(){ 
    newScript = document.createElement('script')
    
    newScript.src = 'game.js'

    head.append(newScript)
    userForm.remove()
    title.remove()
}

// fetch(userURL)
//     .then (response => response.json())
//     .then (users => renderUsers(users))

// function renderUsers(users){
//     const div = document.createElement('div')
//     body.append(div)
//     users.map(user => {
//         const li = document.createElement('li') 

//         li.textContent = `${user.username} :${users.score}`

        
//         div.append(li)
//     })
// }



