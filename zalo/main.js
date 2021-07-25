
function __hk_user_countNotify() {
    var el = document.querySelector('div[data-id="div_Main_TabMsg"]');
    if (el) {
        var it = el.querySelector('i.unread-red');
        if (it) {
            var s = it.getAttribute('class');
            console.log('NOTIFY = ', s.substr(6).split(' ')[0]);
        }
    }
}

function __hk_chat_getListNotify() {
    var box = document.getElementById('conversationListId');
    var arr = [];
    box.querySelectorAll('.item-content-container').forEach(function (it) {
        var name = it.querySelector('.item-title-name').innerText;
        var noti = it.querySelector('.func-unread');
        var count = '';
        if (noti) {
            var s = noti.getAttribute('class');
            count = s.substr(6).split(' ')[0];
        }
        arr.push({ name: name, count: count });
    });
    console.log(arr);
}

function __hk_user_List() {
    var us = document.querySelectorAll('*[data-id="div_TabMsg_ThrdChItem"], *[data-id="div_TabCT_FrdItem"]')
    console.log(us);

    //
    //
    //
}

//__hookInit(function () {
//    __hk_chat_getListNotify();

//}, 300);


