const btnSend = document.querySelector('.btn-send');
const btnGeo = document.querySelector('.btn-geo');

btnSend.addEventListener('click', () => {
    btnSend.style.marginRight = '5px';
    btnGeo.style.display = 'inline-block';
});