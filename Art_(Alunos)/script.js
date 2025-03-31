const navList = document.querySelector('.navlist');

const titleElement = document.querySelector('#name');
const text = "Simon";
let index = 0;
let isTyping = true;
let currentColor = document.documentElement.classList.contains('light') ? 'black' : '#fff';

// função para animar o texto (digitnado e apagando)
function animateText() {
    if(isTyping) {
        if (index < text.length) {
            titleElement.textContent = text.slice(0, index + 1);
            index ++;
        } else {
            isTyping = false;
        }
    } else {
        if (index > 1) {
            titleElement.textContent = text.slice(0, index - 1);
            index --;
        } else {
            isTyping = true;
            // alterna a cor entre preto e laranja
            currentColor = currentColor === (document.documentElement.classList.contains('light') ? 'black' : '#fff') ? '#C94C16' : (document.documentElement.classList.contains('light') ? 'black' : '#fff');
            titleElement.style.color = currentColor;
        }
    }
    setTimeout(animateText, 300);
}

// Inicia a animação quando carregar a página

function updateTextColor() {
    currentColor = document.documentElement.classList.contains('light') ? 'black' : '#fff';
    titleElement.style.color = currentColor;
}

document.addEventListener('DOMContentLoaded', animateText);
updateTextColor();

// BOTÃO DE VOLTAR AO TOPO
// Adiciona um evento de clique ao botão de voltar ao topo
document.querySelector('.top a').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // rola suavemente para o topo da página 
});
