//?-- Seleccion de todos los ELEMENTOS --//

const btnEncriptar = document.querySelector(".btnEncriptar");
const txtEncriptar = document.querySelector(".encriptarText");
const aviso = document.querySelector(".textoAlerta");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjetaContenedor");
const btnCopiar = document.querySelector(".btnCopiar");
const btnDesencriptar = document.querySelector(".btnDesencriptar");


//?-- Configuracion del BOTON DE ENCRIPTAR --//

btnEncriptar.addEventListener("click", e=> {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        aviso.style.background = "red";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "¡El campo de texto, no puede estar vacio!";

        setTimeout(()=>{
            aviso.removeAttribute("style");
            aviso.style.color = "red";
        },1500);
    }   
    else if(texto !== txt){
        aviso.style.background = "red";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "¡No puede llevar acentos, ni caracteres especiales!";

        setTimeout(()=>{
            aviso.removeAttribute("style");
            aviso.style.color = "red";
        },1500);
    }
    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "red";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "¡El texto debe ser todo en minúscula!";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
            aviso.style.color = "red";
        },1500);
    }

    else{
        texto = texto.replace(/e/g, "enter");
        texto = texto.replace(/i/g, "imes");
        texto = texto.replace(/a/g, "ai");
        texto = texto.replace(/o/g, "ober");
        texto = texto.replace(/u/g, "ufat");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
})

//?-- Configuracion del BOTON DESENCRIPTAR --//

btnDesencriptar.addEventListener("click", e=> {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        aviso.style.background = "red";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "¡El campo de texto, no puede estar vacio!";

        setTimeout(()=>{
            aviso.removeAttribute("style");
            aviso.style.color = "red";
        },1500);
    }   
    else if(texto !== txt){
        aviso.style.background = "red";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "¡No puede llevar acentos, ni caracteres especiales!";

        setTimeout(()=>{
            aviso.removeAttribute("style");
            aviso.style.color = "red";
        },1500);
    }
    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "red";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "¡El texto debe ser todo en minúscula!";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
            aviso.style.color = "red";
        },1500);
    }

    else{
        texto = texto.replace(/enter/g, "e");
        texto = texto.replace(/imes/g, "i");
        texto = texto.replace(/ai/g, "a");
        texto = texto.replace(/ober/g, "o");
        texto = texto.replace(/ufat/g, "u");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
})

//?-- Configuracion del BOTON COPIAR --//

btnCopiar.addEventListener("click", e=> {
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
    alert("Texto Copiado Correctamente");
})
