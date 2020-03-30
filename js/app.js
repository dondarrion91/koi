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

// logo de whatsapp
let whatsapp2 = document.createElement("i");
let classWhatsapp2 = document.createAttribute("class");
    classWhatsapp2.value = "fab fa-whatsapp";
    whatsapp2.setAttributeNode(classWhatsapp2);

// numero de telefono
let number2 = document.createElement("span");
let classNumber2 = document.createAttribute("class");
    classNumber2.value = "footerNavBarNumber";
    number2.setAttributeNode(classNumber2);
    number2.innerHTML = "+54 9 351 248-8956"

let footerNavBarList = document.getElementsByClassName("footerNavBarList")[0];
let footerNavBarNumber = document.getElementById("footerNavBarNumber");
let buttonsContainers2 = document.getElementsByClassName("buttonsContainers2")[0];
let span = document.createElement("span");
span.innerHTML = "Córdoba - Argentina";


window.addEventListener("resize",phoneChange);
window.addEventListener("DOMContentLoaded",phoneChange);

function phoneChange(){
        
    if(deviceWidth > 991){
        // footer
        footerNavBarNumber.appendChild(span);
        footerNavBarNumber.appendChild(whatsapp2);
        footerNavBarNumber.appendChild(number2);

        //header
        buttonsContainers2.appendChild(whatsapp);
        buttonsContainers2.appendChild(number);

    }else if(deviceWidth <= 991){
        //footer
        footerNavBarNumber.removeChild(span);
        footerNavBarNumber.removeChild(whatsapp);
        footerNavBarNumber.removeChild(number);

        //header
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




