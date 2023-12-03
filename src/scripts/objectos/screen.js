const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
             this.userProfile.innerHTML = `<div class="info">
                                <img src="${user.avatarUrl}" alt= Foto do perfil do usuario"/>
                                <div class="data">
                                    <h1>${user.name ?? 'nao possui nome cadastrado'}<h1/>
                                    <p>${user.bio ?? 'nao possui bio cadastrada'}</p>
                                </div>
                            </div>`

    let repositoriesItens = ''
    user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}"target="_Blank">${repo.name}</a></li>`)

        if(user.repositories.length > 0){
        this.userProfile.innerHTML += `<div class="repositories section">
                                        <h2>Repositorios</h2>
                                        <ul>${repositoriesItens}</ul>
                                        </div>`    
        }
    }, 
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuario nao cadastrado</h3>"
    }
}

export{screen}