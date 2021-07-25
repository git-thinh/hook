function __hk_qrCheckExpired() {
    var el = document.querySelector('.qrcode.disabled');
    if (el) {
        sessionStorage.setItem('QR_EXPIRED', 'true');
        __api.call('LOGIN_QR_EXPIRED');

        document.querySelectorAll('img').forEach(function (o) { o.setAttribute('src', ''); });

        var btn = el.querySelector('a.btn');
        if (btn) {
            btn.click();
            setTimeout(function () {
                sessionStorage.setItem('QR_EXPIRED', '');
                __hk_qrImageResponse();
            }, 300);
        }
    }
}


function __hk_qrOpenTab() {
    var ls = document.querySelectorAll('a');
    for (var i = 0; i < ls.length; i++) {
        var s = ls[i].innerText || '';
        console.log(s)
        if (s.toUpperCase() == 'VỚI MÃ QR') {
            sessionStorage.setItem('OPEN_TAB_QR', 'true');
            ls[i].click();
            break;
        }
    }
}

function __hk_qrImageResponse() {
    if (sessionStorage.getItem('QR_EXPIRED') == 'true') return;

    if (sessionStorage.getItem('QR_OK') != 'true') {
        var ls = document.querySelectorAll('img');
        for (var i = 0; i < ls.length; i++) {
            var s = ls[i].getAttribute('src') || '';
            console.log(s);
            if (s != null && s.indexOf('data:image/png;base64') == 0) {
                sessionStorage.setItem('QR_OK', 'true');
                __api.call(s);
                break;
            }
        }
    }
}

__hookInit(function () {
    if (sessionStorage.getItem('OPEN_TAB_QR') != 'true') __hk_qrOpenTab();
    else __hk_qrImageResponse();
}, 300);
