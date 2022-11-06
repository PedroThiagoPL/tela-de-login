let btn = document.querySelector('.fa-eye')
let btnEntrar = document.querySelector('button')

btn.addEventListener('click', () => { //Adiciona um evento de click no btn
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password') { //Se o type (getAtribute pega o atributo) for do tipo password...
        inputSenha.setAttribute('type', 'text') //(setAttribute coloca o atributo) troca o type para text
    } else {
        inputSenha.setAttribute('type', 'password')  //se não esconda o texto 
    }
})

btnEntrar.addEventListener('click', () => {
   let usuario = document.querySelector('#usuario')
   let usuarioLabel = document.querySelector('#usuarioLabel')

   let senha = document.querySelector('#senha')
   let senhaLabel = document.querySelector('#senhaLabel')

   let msgError = document.querySelector('#msgError')
   let listUser = []

   let userValid = {
        nome: '',
        user: '',
        senha: ''
   }

   listUser = JSON.parse(localStorage.getItem('listUser'))

   listUser.forEach((item) => {
        if(usuario.value == item.userCad && senha.value == item.senhaCad) {

            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
   })

   if(usuario.value == userValid.user && senha.value == userValid.senha){
        window.location.href = './inicio.html'

        let token = Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)
        

   } else {
        usuarioLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou senha incorretos'
        usuario.focus()
   }

})