let countEl = document.getElementById("count-el")
let countsEl = document.getElementById("count-els")
let home = 0
let guest = 0

function addone() {
    home = home + 1
    countEl.innerText = home
}

function addtwo() {
    home = home + 2
    countEl.innerText = home
}

function addthree() {
    home = home + 3
    countEl.innerText = home
}

function addones() {
    guest = guest + 1
    countsEl.innerText = guest
}

function addtwos() {
    guest = guest + 2
    countsEl.innerText = guest
}

function addforthss() {
    guest = guest + 3
    countsEl.innerText = guest
}
