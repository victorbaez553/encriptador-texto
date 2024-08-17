const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const botonCopiar = document.querySelector('.btn-copiar');

// Deshabilitar botón al inicio
botonCopiar.disabled = true;

// Evento para verificar el contenido del cuadro de texto 'mensaje'
mensaje.addEventListener('input', function () {
    if (mensaje.value.trim() === "") {
        botonCopiar.disabled = true;
    } else {
        botonCopiar.disabled = false;
    }
});

// Función para remover tildes de las vocales
function removerTildes(texto) {
    const acentos = {
        'á': 'a',
        'é': 'e',
        'í': 'i',
        'ó': 'o',
        'ú': 'u',
        'ñ': 'n',
        'Á': 'a',
        'É': 'e',
        'Í': 'i',
        'Ó': 'o',
        'Ú': 'u',
        'Ñ': 'n'
    };
    return texto.replace(/[áéíóúñÁÉÍÓÚÑ]/g, letra => acentos[letra]);
}
// Evento para convertir vocales con tilde a sin tilde en tiempo real
textArea.addEventListener('input', function () {
    textArea.value = removerTildes(textArea.value);
});

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    botonCopiar.disabled = mensaje.value.trim() === "";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    botonCopiar.disabled = mensaje.value.trim() === "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiarTexto() {
    var copyText = document.querySelector(".mensaje");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado: " + copyText.value);
    mensaje.value = "";
    mensaje.style.backgroundImage = "url(/img/Muñeco.png)";
    botonCopiar.disabled = true;
}

