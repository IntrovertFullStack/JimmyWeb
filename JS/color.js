function getRandomColor(){
    const letters = '01234567890ABCDEF';
    let color ='#';

    for (let i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

//Funcion para cambiar el color de fondo

function changeBackgroundColor(){
    document.body.style.backgroundColor =getRandomColor();
}

// Asignar la funcion al boton

document.getElementById('colorButton').addEventListener('click',changeBackgroundColor);