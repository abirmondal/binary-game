var globaln = 0;
var pown;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getNewN() {
    var n;
    do {
        n = randomNumber(1, getCookie('maxn'));
    } while (n == globaln);
    return n;
}

function getPowEq() {
    globaln = getNewN();
    pown = Math.pow(2, globaln);
    var eq = '\\(2^n=' + pown + '\\)';
    return eq;
}

function nextQ() {
    $('#ques').text(getPowEq);
    renderMathInElement(document.body);
}

function checkans(ans) {
    if (ans == globaln) {
        return 1;
    }
    else {
        return 0;
    }
}