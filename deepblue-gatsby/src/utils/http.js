export function post(url, body, callback) {
    const req = new XMLHttpRequest();
    let payload;

    req.open("POST", url, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.addEventListener("load", function () {
        if (req.status < 400) {
            callback(null, JSON.parse(req.responseText));
        } else {
            callback(new Error("Request failed: " + req.statusText));
        }
    });

    if (typeof body !== 'string') {
        payload = JSON.stringify(body)
    }
    else {
        payload = body;
    }
    req.send(payload);
}


export function socket(socketUrl, body, callback) {
    const socket = new WebSocket(socketUrl);

    socket.addEventListener('open', (event) => {
        console.log('Socket Opened: ', event);
        socket.send(body);
    });

    socket.addEventListener('message', (event) => {
        console.log('Socket Messaged:', event);
        callback(event);
    });
}