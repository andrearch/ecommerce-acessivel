const classes = document.querySelector('html').classList;

if (localStorage.getItem('contraste') === 'true')
  classes.toggle('contraste')

document.querySelector('#contraste').onclick = () => {
  classes.toggle('contraste')
  
  localStorage.setItem("contraste", classes.contains('contraste'));
}
