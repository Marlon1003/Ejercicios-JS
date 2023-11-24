let y = 0;
let x = 0;
let crecer = 0;
let tamano = 80;
let personaje = document.getElementById('personaje');
console.log(personaje);
let objeto = document.getElementById('objeto');

function movimiento(letra){
    if(letra.key == 'd' && x < window.innerWidth - tamano){
        x += 50;
        personaje.style.left = x + 'px';
        personaje.src = 'img/p-right.png';
    }else if(letra.key == 'a' && x > 0){
        x -= 50;
        personaje.style.left = x + 'px';
        personaje.src = 'img/p-left.png';
    }else if(letra.key == 'w' && y > 0){
        y -= 50;
        personaje.style.top = y + 'px';
    }else if(letra.key == 's' && y < window.innerHeight - tamano){
        y += 50;
        personaje.style.top = y + 'px'; 
    }

    if(letra.key === 'o'){
        crecer++;
        if(crecer === 5){
            if(tamano < 330){
                tamano += 50
                personaje.style.width = tamano + 'px'
                crecer = 0
            }
        }
    }

    if(tamano == 80){
        if(x == 400 && y == 350 || x == 400 && y == 300){
            x -= 50;
            personaje.style.left = x + 'px';
            personaje.src = 'img/p-left.png';
        }else if(y == 300 && x ==450){
            y -= 100;
            personaje.style.top = y + 'px';
        }else if(x == 500 && y ==350 || x == 500 && y == 300){
            x += 50;
            personaje.style.left = x + 'px';
            personaje.src = 'img/p-right.png';
        }else if(y == 350 && x ==450){
            y += 50;
            personaje.style.top = y + 'px';
        }
    }    
    


    if(tamano == 80){
        if(x == 700 && y == 350 || x == 700 && y == 300){
            x -= 50;
            personaje.style.left = x + 'px';
            personaje.src = 'img/p-left.png';
        }else if(y == 300 && x ==750){
            y -= 100;
            personaje.style.top = y + 'px';
        }else if(x == 800 && y ==350 || x == 800 && y == 300){
            x += 50;
            personaje.style.left = x + 'px';
            personaje.src = 'img/p-right.png';
        }else if(y == 350 && x ==750){
            y += 50;
            personaje.style.top = y + 'px';
        }
    }

}

window.onkeydown = movimiento;

