var botao3 = document.getElementById("button3")
var botao4 = document.getElementById("button4")
var bButton1 = document.getElementById('border__button1');
var bButton2 = document.getElementById('border__button2');
var bButton3 = document.getElementById('border__button3');
var bButton4 = document.getElementById('border__button4');
var bButton5 = document.getElementById('border__button5');
var bButton6 = document.getElementById('border__button6');
var bButton7 = document.getElementById('border__button7');
var bButton8 = document.getElementById('border__button8');

botao3.addEventListener('mouseenter', () => bButton1.style.display = "block" );
botao3.addEventListener('mouseenter', () => bButton2.style.display = "block" );
botao3.addEventListener('mouseenter', () => bButton3.style.display = "block" );
botao3.addEventListener('mouseenter', () => bButton4.style.display = "block" );

botao3.addEventListener('mouseleave', () => bButton1.style.display = "none" );
botao3.addEventListener('mouseleave', () => bButton2.style.display = "none" );
botao3.addEventListener('mouseleave', () => bButton3.style.display = "none" );
botao3.addEventListener('mouseleave', () => bButton4.style.display = "none" );


botao4.addEventListener('mouseenter', () => bButton5.style.display = "block" );
botao4.addEventListener('mouseenter', () => bButton6.style.display = "block" );
botao4.addEventListener('mouseenter', () => bButton7.style.display = "block" );
botao4.addEventListener('mouseenter', () => bButton8.style.display = "block" );

botao4.addEventListener('mouseleave', () => bButton5.style.display = "none" );
botao4.addEventListener('mouseleave', () => bButton6.style.display = "none" );
botao4.addEventListener('mouseleave', () => bButton7.style.display = "none" );
botao4.addEventListener('mouseleave', () => bButton8.style.display = "none" );

var button1 = document.getElementById('button1');
var iconComent = document.getElementById('iconComent');

button1.addEventListener('mouseenter', () => iconComent.style.color = '#e6e6e6');
button1.addEventListener('mouseleave', () => iconComent.style.color = '#501919');

var button2 = document.getElementById('button2');
var iconTag = document.getElementById('iconTag');

button2.addEventListener('mouseenter', () => iconTag.style.color = '#e6e6e6');
button2.addEventListener('mouseleave', () => iconTag.style.color = '#501919');

