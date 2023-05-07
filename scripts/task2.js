const btn = document.querySelector('.j-btn-test');

btn.addEventListener('click', () => {
    alert(`Ширина окна: ${window.innerWidth}\r Высота окна: ${window.innerHeight}`);
});