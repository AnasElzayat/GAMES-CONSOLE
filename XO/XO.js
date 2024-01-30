let index = 'X';
let head = document.getElementsByClassName('head');
let domain = [];
let content = [];
function play(t) {
    let elem = document.getElementById(t.id);
    if (index == 'X' && elem.innerHTML == '') {
        elem.innerHTML = 'X';
        index = 'O';
        head[0].innerHTML = 'Role Play  (O)';
    } else if (index == 'O' && elem.innerHTML == '') {
        elem.innerHTML = 'O';
        index = 'X';
        head[0].innerHTML = 'Role Play  (X)';
    }
    check();
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
    head[0].style.background='#7d87b7';
    head[0].innerHTML = `(${x})  is winner`;
    setInterval(function () { head[0].innerHTML += '.' }, 1000)
    setTimeout(function () { location.reload() }, 4000)
}
