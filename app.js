
let charCodeArr = [];
let contador = 0;




//Función Encriptar
/////Verificar el texto del Usuario contiene mayusculas o acentos////////
function encriptar(){
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
        asignarTextoElemento("salidaEncriptado", texto);
        asignarTextoElemento("textoNegro", '');
        asignarTextoElemento("textoGris", '');
        removerClase("dibujoMuñeco", "dibujo");
        removerClase("btnCopiar", "btn-copiar1");
        asignarTextoElemento("btnCopiar",'Copiar')
        agregarClase("btnCopiar","btn-copiar");
        document.getElementById("capturaTexto").value = "";
        document.getElementById("capturaTexto").placeholder = "Ingrese el texto aquí";
    }
    
 return;
 
}
    

function desencriptar() {

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
    asignarTextoElemento("salidaEncriptado", textoModificado );
        document.getElementById("capturaTexto").value = "";
        document.getElementById("capturaTexto").placeholder = "Ingrese el texto aquí";
        removerClase("btnCopiar","btn-copiar1");
        agregarClase("btnCopiar","btn-copiar");
        asignarTextoElemento("btnCopiar", "Copiar");


    return textoModificado;
}

function copiarTexto() {
    // Obtener el texto a copiar
    var textoACopiar = document.getElementById("salidaEncriptado").innerText;

    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(textoACopiar);
    removerClase("btnCopiar","btn-copiar");
    agregarClase("btnCopiar","btn-copiar1");
    asignarTextoElemento("btnCopiar", "Copiado");
}

//Funcion para agregar texto a cualquier etiqueta se HTML
function asignarTextoElemento(elemento, texto){
    /// Conecar Javascript al htmo con Document. seleccionamos la qtiqueeta que queremos usar
    let elementoHTML = document.getElementById(elemento);
    // Agregamos el texto
    elementoHTML.innerHTML = texto;
    return;
}

//función para agregar clases
function agregarClase(id, clase) {
    let claseAgregada = document.getElementById(id);
    claseAgregada.classList.add(clase);
    return;
}

//funcion para eliminar clase
function removerClase(id, clase) {
    let claseAgregada = document.getElementById(id);
    claseAgregada.classList.remove(clase);
    return;
}



function advertencia() {

    swal({
        title: "Cuidado!",
        text: "Recuerda no usar letras mayúsculas o acentos",
        icon: "warning",
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          location.reload();
        }
        
        });
}