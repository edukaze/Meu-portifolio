const botao = document.getElementById('botao-tema');
const body = document.body;

// Persistência do tema
const temasalvo = localStorage.getItem('tema');
temaEscuro(temasalvo === 'escuro');

// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  if (tipo == true) {
    body.classList.add('escuro');
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove('escuro');
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

botao.addEventListener('click', () => {
  const isescuro = body.classList.toggle('escuro');
  temaEscuro(isescuro);
  localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});


//saiba mais texto adicional ao clicar

const botoes = document.querySelectorAll("button.saiba-mais");

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    const extraTexto = botao.nextElementSibling; // pega o <p> logo depois do botão
    extraTexto.classList.toggle("mostrar"); // alterna entre mostrar/ocultar

    // opcional: trocar o texto do botão
    if (extraTexto.classList.contains("mostrar")) {
      botao.textContent = "Mostrar menos...";
    } else {
      botao.textContent = "Saiba mais...";
    }
  });
});


// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});