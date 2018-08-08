const display = document.querySelector('.calc .display');

document.querySelectorAll('.calc .num, .calc .op')
    .forEach( btn => btn.addEventListener('click', numOperClick));

function numOperClick(e) {
    display.value += e.target.innerText;
}

document.querySelector('.calc .eq')
    .addEventListener('click', function(){
        display.value = eval(display.value);        
})

function back() {
    var value = document.getElementById("backspace").value;
    document.getElementById("backspace").value = value.substr(0, value.length - 1);
}
document.querySelector('.calc .sqrt')
    .addEventListener('click', function(){
        display.value = Math.sqrt(display.value);        
})
document.querySelector('.calc .cos')
    .addEventListener('click', function(){
        display.value = Math.cos(display.value);        
})
document.querySelector('.calc .sin')
    .addEventListener('click', function(){
        display.value = Math.sin(display.value);        
})
