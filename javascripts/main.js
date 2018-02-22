const classes = document.querySelector('html').classList;

if (localStorage.getItem('contraste') === 'true')
  classes.toggle('contraste')

document.querySelector('#contraste').onclick = () => {
  classes.toggle('contraste')
  
  localStorage.setItem("contraste", classes.contains('contraste'));
}

var botao = document.querySelector('#adicionar-carrinho')

if (botao !== null) {
  botao.onclick = () => {
    var link = document.querySelector("#peca-adicionada")
    link.classList.remove("not-exists")
    link.focus()
  }
}