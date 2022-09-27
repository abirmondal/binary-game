const daysToExpire = new Date('31 Dec 3000 00:00:00 GMT');

function setCookie(name, value) {
    $.cookie(name, value, { expires: daysToExpire });
}

function getCookie(name) {
    return $.cookie(name);
}