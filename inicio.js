const btn = document.querySelector('button')

if(localStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar essa página!')
    window.location.href = './index.html'
}

btn.addEventListener('click', () => {
    localStorage.removeItem('token')
    window.location.href = './index.html'
})




