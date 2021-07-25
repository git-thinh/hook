
function __hookInit(__onmessage, timeOut) {
    if (timeOut == null) timeOut = 300;
    var blob = new Blob([' onmessage = function (e) { setInterval(function () { postMessage(1); }, ' + timeOut + '); }; '], { type: 'text/javascript' });
    document.worker = new Worker(window.URL.createObjectURL(blob));
    document.worker.onmessage = __onmessage;
    setTimeout(function () { document.worker.postMessage('') }, 300);
};

