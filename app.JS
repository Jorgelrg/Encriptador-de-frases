
let charCodeArr = [];
let contador = 0;



////////////////Funciones///////////////////

/////Verificar el texto del Usuario contiene mayusculas o acentos////////
function encriptador(){
    let textoCapturado = document.getElementById("capturaTexto").value;
    const reemplazos = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    console.log(textoCapturado);


    let advertenciaMostrada = false; // Bandera para controlar si se ha mostrado la advertencia

    for (let contador = 0; contador < textoCapturado.length; contador++) {
        let code = textoCapturado.charCodeAt(contador);
        charCodeArr.push(code);
    
        if (code > 33 && code < 96 || code > 123) {
            if (!advertenciaMostrada) { // Verificar si la advertencia aún no se ha mostrado
                advertencia();
                advertenciaMostrada = true; // Establecer la bandera en true para indicar que se ha mostrado la advertencia
            }
        }
    }
    
    // Si la advertencia no se ha mostrado, ejecutar las condiciones finales
    if (!advertenciaMostrada) {
        texto = textoCapturado.replace(/[aeiou]/g, vocal => reemplazos[vocal]);
        condicionesFinales();
    }
    
 return;
 
}
// 2
   

function condicionesFinales() {
        asignarTextoElemento('mensaje1','')
        asignarTextoElemento("mensaje", texto );
        removerClases("dibujo", "imgDibujo");
        removerClases("contenedorEncriptador", "textoEncriptador");
        agregarClases("contenedorEncriptador", "textoEncriptador2");
        removerClases("textDes", "textoDesencriptador");
        agregarClases("textDes", "textoDesencriptado2");
}

function condicionesIniciales() {
    
}

function reemplazarVocales() {

    var textoModificado = texto;
    console.log(textoModificado);

    // Objeto para mapear cada reemplazo a su correspondiente vocal original
    const reemplazosInversos = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    // Convertir cada reemplazo del texto modificado a su vocal original
    textoModificado = textoModificado.replace(/ai|enter|imes|ober|ufat/g, reemplazo => reemplazosInversos[reemplazo]);
    asignarTextoElemento("mensaje", textoModificado );

    return textoModificado;
}

function removerClases(id, clase) {
    let claseRemovida = document.getElementById(id);
    claseRemovida.classList.remove(clase);

    return;
}


function agregarClases(id, clase) {
    let claseRemovida = document.getElementById(id);
    claseRemovida.classList.add(clase);

    return;
}

function removerElementos(idHijo, idPadre) {

    var divHijo = document.getElementById(idHijo);

    // Obtén el elemento div padre
    var contenedorPadre = document.getElementById(idPadre);

    // Elimina el div hijo del div padre
    contenedorPadre.removeChild(divHijo);
    return;
}

//Funcion para agregar texto a cualquier etiqueta se HTML
function asignarTextoElemento(elemento, mensaje){
    /// Conecar Javascript al htmo con Document. seleccionamos la qtiqueeta que queremos usar
    let elementoHTML = document.getElementById(elemento);
    // Agregamos el texto
    elementoHTML.innerHTML = mensaje;
    return;
}

function detectarMayusculas(params) {
    
}

function advertencia() {

    swal({
        title: "Cuidado!",
        text: "Recuerda no usar letraas mayúsculas o acentos",
        icon: src ="/im",
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          location.reload();
        }
        
        });
}

function copiarTexto() {
    
    let textoCapturado = document.getElementById("capturaTexto").value;
    const reemplazos = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };
    
    // Si la advertencia no se ha mostrado, ejecutar las condiciones finales
 
    texto = textoCapturado.replace(/[aeiou]/g, vocal => reemplazos[vocal]);
    navigator.clipboard.writeText(texto)
    .then(() => {
    console.log('Contenido copiado al portapapeles');
    /* Resuelto - texto copiado al portapapeles con éxito */
    },() => {
    console.error('Error al copiar');
    /* Rechazado - fallo al copiar el texto al portapapeles */
});
document.getElementById("capturaTexto").value = "";
document.getElementById("capturaTexto").placeholder = "Ingrese el texto aquí";

return;
}


function reemplazarVocales1() {

    var texto = document.getElementById("capturaTexto").value;
    var textoModificado = texto;
    console.log(textoModificado);

    // Objeto para mapear cada reemplazo a su correspondiente vocal original
    const reemplazosInversos = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    // Convertir cada reemplazo del texto modificado a su vocal original
    textoModificado = textoModificado.replace(/ai|enter|imes|ober|ufat/g, reemplazo => reemplazosInversos[reemplazo]);
    asignarTextoElemento("mensaje", textoModificado );

    document.getElementById("capturaTexto").value = "";
document.getElementById("capturaTexto").placeholder = "Ingrese el texto aquí";

    return textoModificado;
}