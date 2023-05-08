const wsUrl = "wss://echo-ws-service.herokuapp.com";

const output = document.getElementById('output-block');
const btnSend = document.querySelector('.btn-send');
const btnGeo = document.querySelector('.btn-geo');

let websocket = new WebSocket(wsUrl);
websocket.onopen = function (event) {console.log('CONNECTED');};
websocket.onclose = function (event) {console.log('DISCONNECTED');};

let input;

function WriteToScreen (msg, type) {
    let newElem = document.createElement('p');
    newElem.style.wordBreak = 'break-word';
    if (type === 'client') {
        newElem.style.alignSelf = 'flex-end';
    } else if (type === 'server') {
        newElem.style.alignSelf = 'flex-start';
    }
    newElem.style.border = '3px solid #bad7ec';
    newElem.style.padding = '7px 15px';
    newElem.style.margin = '0 0 5px 0';
    newElem.innerHTML = msg;
    output.appendChild(newElem);
}
btnSend.addEventListener('click', () => {
    input = document.querySelector('input').value;
    console.log(input);
    btnSend.style.marginRight = '5px';
    btnGeo.style.display = 'inline-block';
    WriteToScreen(input, 'client');
    websocket.send(input);

    websocket.onmessage = function (event) {WriteToScreen(event.data, 'server')};
    websocket.onerror = function (event) {alert('ERROR:' + event.data)};
});