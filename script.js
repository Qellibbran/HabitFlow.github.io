var input = document.getElementById('habitInput');
var btn = document.getElementById('addBtn');
var list = document.getElementById('habitList');
var empty = document.getElementById('empty');
var bar = document.getElementById('bar-in');
var textPercent = document.getElementById('percentText');

function update() {
    var all = list.getElementsByTagName('li');
    var done = list.getElementsByClassName('completed');

    if (all.length == 0) {
        empty.style.display = "block";
    } else {
        empty.style.display = "none";
    }

    if (all.length > 0) {
        var p = Math.round((done.length / all.length) * 100);
        bar.style.width = p + "%";
        textPercent.innerText = p + "%";
    } else {
        bar.style.width = "0%";
        textPercent.innerText = "0%";
    }
}

btn.onclick = function() {
    var val = input.value;
    if (val == "") return;

    var li = document.createElement('li');
    li.innerHTML = '<span>' + val + '</span><button class="del-btn">X</button>';

    li.onclick = function() {
        this.classList.toggle('completed');
        update();
    };

    li.querySelector('.del-btn').onclick = function(e) {
        e.stopPropagation();
        li.remove();
        update();
    };

    list.appendChild(li);
    input.value = "";
    update();
};

update();