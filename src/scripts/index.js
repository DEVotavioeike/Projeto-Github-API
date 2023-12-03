import {getUser} from '/src/scripts/services/user.js'
import {getRepositories} from '/src/scripts/services/repositories.js'

import {user} from '/src/scripts/objectos/user.js'
import {screen} from '/src/scripts/objectos/screen.js'


document.getElementById('btn-search').addEventListener('click',() => {
    const userName = document.getElementById('input-search').value
    if(validateEmptyInput(userName)) return
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup',(e) => {
    const userName = e.target.value
    const key =  e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
      if(validateEmptyInput(userName)) return
        getUserProfile(userName)
    }
})

function validateEmptyInput(userName){
    if(userName.length === 0){
        alert('Preencha o campo com o nome de usuario do GitHub')
        return true
    }
}

async function getUserData(userName){

    const userResponse = await getUser(userName)

    if(userResponse.message === "Not Found"){
        screen.renderNotFound()
        return  
    }

    console.log("ta dando merda")
    const repositoriesResponsee = await getRepositories(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponsee)

    screen.renderUser(user)  
}


