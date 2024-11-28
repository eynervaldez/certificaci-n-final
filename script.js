function saludar(){
     alert("Inicio de sección exitoso") } 

function cambioColor(){
    btn.style.backgroundColor = 'red';
}
     
  const boton = document.getElementById('cambiobtn');
  const miElemento = document.getElementById('miElemento'); 

  boton.addEventListener('click', function() {
    // Cambiar el color de fondo
    miElemento.style.backgroundColor = 'darkred';

    // Cambiar el texto
    miElemento.textContent = 'Rentado';
  });

 