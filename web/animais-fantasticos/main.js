const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach(item => item.classList.add('ativo'));

// Remove a classe ativo de todos os itens e mantém somente no primeiro

itensMenu.forEach(item => item.classList.remove('ativo'));
itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo Alt
const imgs = document.querySelectorAll('img');

imgs.forEach(img => console.log(img.hasAttribute('alt')));
