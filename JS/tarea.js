function agregarTarea(){
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

    if (nuevaTareaTexto ===""){
        alert("Por favor ingrese una tarea");
        return;
    }

    let nuevaTarea =document.createElement("li");
    nuevaTarea.textContent = nuevatareaTexto + " ";

    let buttonEliminar =document.createElement("button");
    buttonEliminar.textContent = " -";
    buttonEliminar.onclick=function(){nuevatarea.remove()};

    nuevaTarea.appendChild(buttonEliminar);

    document.getElementById("ListaTareas").appendChild(nuevaTarea);
}


//limpiar el texto

document.getElementById("nuevaTarea").value ="";
