export function post(url, body, callback) {
    const req = new XMLHttpRequest();

    req.open("POST", url, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.addEventListener("load", function () {
        if (req.status < 400) {
            callback(null, JSON.parse(req.responseText));
        } else {
            callback(new Error("Request failed: " + req.statusText));
        }
    });
    req.send(JSON.stringify(body));
}