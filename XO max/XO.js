let end =0;
let index = 'X';
let head = document.getElementsByClassName('head');
let domain = [];
let content = [];
function play(t) {
    let elem = document.getElementById(t.id);
    if (index == 'X' && elem.innerHTML == '') {
        elem.innerHTML = 'X';
        index = 'O';
        head[0].style.background = '#2f3440';
        head[0].innerHTML = 'Wait  (O)';

    } else if (index == 'O' && elem.innerHTML == '') {
        elem.innerHTML = 'O';
        index = 'X';
        head[0].style.background = '#3b437c';
        head[0].innerHTML = 'Role Play  (X)';
    }
    check();
    if (index == 'O'&&end==0) { setTimeout(function () { comPlay(); }, 1000) }

}
function comPlay() {

    for (let i = 1; i < 10; i++) {
        domain[i] = document.getElementById('d' + i);
        content[i] = document.getElementById('d' + i).innerHTML;
    }
    for (let j = 1; j < 10; j += 3) {
        if ((content[j] == content[j + 1] && content[j] == 'O' && content[j] != '') || (content[j + 1] == content[j + 2] && content[j + 1] == 'O' && content[j + 1] != '') || (content[j] == content[j + 2] && content[j] == 'O' && content[j] != '')) {
            if (content[j] == '') { domain[j].click(); return; }
            if (content[j + 1] == '') { domain[j + 1].click(); return; };
            if (content[j + 2] == '') { domain[j + 2].click(); return; };
        }
    }
    for (let j = 1; j < 4; j++) {
        if ((content[j] == content[j + 3] && content[j] == 'O' && content[j] != '') || (content[j + 3] == content[j + 6] && content[j + 3] == 'O' && content[j + 3] != '') || (content[j] == content[j + 6] && content[j] == 'O' && content[j] != '')) {
            if (content[j] == '') { domain[j].click(); return; }
            if (content[j + 3] == '') { domain[j + 3].click(); return; };
            if (content[j + 6] == '') { domain[j + 6].click(); return; };
        }
    }
    if ((content[1] == content[5] && content[1] == 'O' && content[1] != '') || (content[5] == content[9] && content[5] == 'O' && content[5] != '') || (content[1] == content[9] && content[1] == 'O' && content[1] != '')) {
        if (content[1] == '') { domain[1].click(); return; }
        if (content[5] == '') { domain[5].click(); return; };
        if (content[9] == '') { domain[9].click(); return; };
    }
    if ((content[3] == content[5] && content[3] == 'O' && content[3] != '') || (content[5] == content[7] && content[5] == 'O' && content[5] != '') || (content[3] == content[7] && content[3] == 'O' && content[3] != '')) {
        if (content[3] == '') { domain[3].click(); return; }
        if (content[5] == '') { domain[5].click(); return; };
        if (content[7] == '') { domain[7].click(); return; };
    }
    for (let j = 1; j < 10; j += 3) {
        if ((content[j] == content[j + 1] && content[j] == 'X' && content[j] != '') || (content[j + 1] == content[j + 2] && content[j + 1] == 'X' && content[j + 1] != '') || (content[j] == content[j + 2] && content[j] == 'X' && content[j] != '')) {
            if (content[j] == '') { domain[j].click(); return; }
            if (content[j + 1] == '') { domain[j + 1].click(); return; };
            if (content[j + 2] == '') { domain[j + 2].click(); return; };
        }
    }
    for (let j = 1; j < 4; j++) {
        if ((content[j] == content[j + 3] && content[j] == 'X' && content[j] != '') || (content[j + 3] == content[j + 6] && content[j + 3] == 'X' && content[j + 3] != '') || (content[j] == content[j + 6] && content[j] == 'X' && content[j] != '')) {
            if (content[j] == '') { domain[j].click(); return; }
            if (content[j + 3] == '') { domain[j + 3].click(); return; };
            if (content[j + 6] == '') { domain[j + 6].click(); return; };
        }
    }
    if ((content[1] == content[5] && content[1] == 'X' && content[1] != '') || (content[5] == content[9] && content[5] == 'X' && content[5] != '') || (content[1] == content[9] && content[1] == 'X' && content[1] != '')) {
        if (content[1] == '') { domain[1].click(); return; }
        if (content[5] == '') { domain[5].click(); return; };
        if (content[9] == '') { domain[9].click(); return; };
    }
    if ((content[3] == content[5] && content[3] == 'X' && content[3] != '') || (content[5] == content[7] && content[5] == 'X' && content[5] != '') || (content[3] == content[7] && content[3] == 'X' && content[3] != '')) {
        if (content[3] == '') { domain[3].click(); return; }
        if (content[5] == '') { domain[5].click(); return; };
        if (content[7] == '') { domain[7].click(); return; };
    }
    do {
        var rundom1 = Math.floor(Math.random() * 11);
    } while (content[rundom1] != '')
    domain[rundom1].click(); return;



}
function check() {
    for (let i = 1; i < 10; i++) {
        domain[i] = document.getElementById('d' + i);
        content[i] = document.getElementById('d' + i).innerHTML;
    }
    for (let j = 1; j < 10; j += 3) {
        if (content[j] == content[j + 1] && content[j + 1] == content[j + 2] && content[j] != '') {
            winner(domain[j], domain[j + 1], domain[j + 2], content[j])
        }
    }
    for (let j = 1; j < 4; j++) {
        if (content[j] == content[j + 3] && content[j + 3] == content[j + 6] && content[j] != '') {
            winner(domain[j], domain[j + 3], domain[j + 6], content[j])
        }
    }
    if (content[1] == content[5] && content[5] == content[9] && content[1] != '') {
        winner(domain[1], domain[5], domain[9], content[1])
    }
    if (content[3] == content[5] && content[5] == content[7] && content[3] != '') {
        winner(domain[3], domain[5], domain[7], content[3])
    }
}
function winner(d1, d2, d3, x) {
    d1.style.background = '#7d87b7';
    d2.style.background = '#7d87b7';
    d3.style.background = '#7d87b7';
    head[0].style.background = '#7d87b7';
    head[0].innerHTML = `(${x})  is winner`;
    setInterval(function () { head[0].innerHTML += '.' }, 1000)
    setTimeout(function () { location.reload() }, 4000)
    end=1;
}
