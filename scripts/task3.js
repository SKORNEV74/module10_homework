const wsUrl = "wss://echo-ws-service.herokuapp.com";

const output = document.getElementById('output-block');
const btnSend = document.querySelector('.btn-send');
const btnGeo = document.querySelector('.btn-geo');

let websocket;
let input;

function WriteToScreen (msg, type) {
    let newElem = document.createElement('p');
    newElem.style.wordBreak = 'break-word';
    if (type === 'client') {
        newElem.style.alignSelf = 'flex-end';
    } else if (type === 'server') {
        newElem.style.alignSelf = 'left';
    }
    newElem.style.border = '3px solid #bad7ec';
    newElem.style.padding = '7px 15px';
    newElem.style.margin = '0 0 5px 0';
    newElem.innerHTML = msg;
    output.appendChild(newElem);
}
btnSend.addEventListener('click', () => {
    input = document.getElementById('input-block').value;
    console.log(input);
    btnSend.style.marginRight = '5px';
    btnGeo.style.display = 'inline-block';
    WriteToScreen(input, 'client');
    websocket.send(input);
});