var loader = document.getElementById('loading');

function loadingFunc() {
    loader.style.display ='none';
}


const colors = [
    '#2196f3',
    '#e91e63',
    '#ffeb3b',
    '#74ff1d'
]

function createSquare(){
    const section = document.querySelector('.home');
    const square = document.createElement('span');

    var size = Math.random()*50;
    
    square.style.width= 20 + size +'px';
    square.style.height= 20 + size +'px';

    square.style.left= Math.random() * innerWidth + 'px';
    square.style.top= Math.random() * innerHeight + 'px';

    const bg = colors[Math.floor(Math.random()* colors.length)];
    square.style.background=bg;

    section.appendChild(square);
    setTimeout(()=>{
        square.remove()
    },5000)
}
setInterval(createSquare , 100)


/* Toggle nav */

const nav = document.getElementById('nav');
document.getElementById('toggle').onclick = function() {
    this.classList.toggle('active');
    nav.classList.toggle('active');
}
