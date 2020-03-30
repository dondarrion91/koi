let nuestraEmpresaContainer = document.getElementById("nuestraEmpresa");
let map = document.getElementById("map");
let mapElement = document.getElementsByClassName("mapElement")[0];
let mapTitle = document.getElementsByClassName("mapTitle")[0];
let device = document.getElementsByTagName("html")[0];
let deviceWidth = device.offsetWidth;
let formulario = document.getElementsByClassName("formulario")[0];
let body = document.getElementsByTagName("body")[0];
let nuestraEmpresaMapa = document.getElementById("nuestraEmpresaMapa");


// Al cargar la pagina se posicionan los elementos 
if(deviceWidth >= 992){
    nuestraEmpresaMapa.appendChild(map);
    nuestraEmpresaMapa.appendChild(mapElement);
    mapTitle.innerHTML = `Nuestros <br> locales <br> asociados`;
}else if(deviceWidth < 992){

    mapTitle.innerHTML = `Podes encontrar nuestros productos en`;
    if(nuestraEmpresaMapa.hasChildNodes()){
        
        nuestraEmpresaMapa.removeChild(nuestraEmpresaMapa.childNodes[0]);
    }

    if(map !== null && mapElement !== null){

        formulario.insertAdjacentElement("beforebegin",map);
        formulario.insertAdjacentElement("beforebegin",mapElement);

    }
    
}

// al cambiar el dispositivo se posicionan los elementos dependiendo el ancho
window.addEventListener("resize",cambioAncho);

function cambioAncho(){
    deviceWidth = device.offsetWidth;
    
    if(deviceWidth >= 992){
        
        nuestraEmpresaMapa.appendChild(map);
        nuestraEmpresaMapa.appendChild(mapElement);
        mapTitle.innerHTML = `Nuestros <br> locales <br> asociados`;

    }else if(deviceWidth < 992){
        
        map = document.getElementById("map");
        mapElement = document.getElementsByClassName("mapElement")[0];


        mapTitle.innerHTML = `Podes encontrar nuestros productos en`;

        if (nuestraEmpresaMapa.hasChildNodes()) {
          
          nuestraEmpresaMapa.removeChild(nuestraEmpresaMapa.childNodes[0]);
          
          
        }


        if(map !== null && mapElement !== null){

            formulario.insertAdjacentElement("beforebegin",map);
            formulario.insertAdjacentElement("beforebegin",mapElement);

        }

        
    }
}


// Intercambio de telefono entre el footer y el

let number = document.getElementById("phoneNumber");
let whatsapp = document.getElementsByClassName("fa-whatsapp")[0];
let footerList = document.getElementsByClassName("footerNavBar")[0];
let footerListNavbar = document.getElementsByClassName("footerNavBarList")[0];
let buttonsContainers2 = document.getElementsByClassName("buttonsContainers2")[0];


window.addEventListener("resize",phoneChange);
window.addEventListener("DOMContentLoaded",phoneChange);

function phoneChange(){
        
    if(deviceWidth < 1100 && deviceWidth > 991 && !buttonsContainers2.classList.contains(whatsapp)){
        
        footerList.insertBefore(whatsapp,footerListNavbar);
        footerList.insertBefore(number,footerListNavbar);
        
        
    }else if(!buttonsContainers2.classList.contains(whatsapp) && !buttonsContainers2.classList.contains(number)){
        buttonsContainers2.appendChild(whatsapp);
        buttonsContainers2.appendChild(number);
        
    }
    
}

// cambio de las fotos de las tarjetas


function changeSrc(){
    
    let webUrl = [
        "../img/ESCRITORIO/01-Alimentos.png",
        "../img/ESCRITORIO/03-Jugos-y-gaseosas.png",
        "../img/ESCRITORIO/02-Bebidas-alcoholicas.png",
        "../img/ESCRITORIO/04-Golosinas.png",
        "../img/ESCRITORIO/05-snacks.png",
        "../img/ESCRITORIO/06-Ramen.png",
        "../img/ESCRITORIO/07-Otros.png",
    ];
    
    let celUrl = [
        "../img/01-Alimentos_cel.png",
        "../img/04-Jugos-y-gaseosas.png",
        "../img/02-Bebidas-alcoholicas.png",
        "../img/03-Golosinas.png",
        "../img/05-snacks.png",
        "../img/06-Ramen.png",
        "../img/07-Otros.png",
    ];
    
    let fotos = document.getElementsByClassName("tarjeta_fotos");

    if(deviceWidth>991){
        for(let i=0;i<fotos.length;i++){
            fotos[i].src = webUrl[i];
        }
    }else if(deviceWidth<991){
        
        for(let i=0;i<fotos.length;i++){
            fotos[i].src = celUrl[i];
        }
    }
    

}

window.addEventListener("resize",changeSrc);
window.addEventListener("load",changeSrc);




