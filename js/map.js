const ACCESS_TOKEN = "pk.eyJ1IjoiZG9uZGFycmlvbjkxIiwiYSI6ImNrN2V4OWo2NTBiaDYzb2x1ajd2Zm8zbzIifQ.s0lI-0vdWrtugazBtv2x5Q";

const cargarMapa = async () =>{
    let mymap = await L.map('mapid',{
        center: [-31.410256,  -64.194538],
        zoom: 5,
        dragging: !L.Browser.mobile,
        touchZoom: true
    });
    console.log(mymap);
    
    await L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        noWrap: true
    }).addTo(mymap);

    let contenedorMapa = document.getElementById("mapContent");
    console.log(contenedorMapa);

    for(let i=0;i<locales.length;i++){
        contenedorMapa.innerHTML += `
    
        <article class="mapContentElement">
            <div class="mapContentElementContainer">
                <h4 class="mapContentElementContainerTitle">${locales[i].name}</h4>
                <p class="mapContentElementContainerText">${locales[i].description}</p>
            </div>
           
            <button type="button" class="btn mapContentElementButton">Ver en <br> mapa</button>
      
           
        </article>
        <hr>
        `;
    
        let marker = await L.marker([locales[i].x, locales[i].y]).addTo(mymap);
    
        marker.bindPopup(locales[i].name);
    }

    
}


cargarMapa();


let locales = [
    {
        name: "El Nido Clothes and Games",
        description: "Golosinas, snacks y gaseosas: Av.Colón 345(Galería Cinerama) local 78, frente a boleterías, El Nido Clothes and Games y atienden de lunes a viernes de",
        x: -31.412261,
        y: -64.187968
    },
    {
        name: "El almacen de Mario",
        description: "Productos gastronomicos y de importación.",
        x: -31.413161,
        y: -64.192034
    },
    {
        name: "El almacen de Julian",
        description: "Productos gastronomicos y de importación.",
        x: -31.413161,
        y: -64.192034
    },
    {
        name: "El Nido Clothes and Games",
        description: "Golosinas, snacks y gaseosas: Av.Colón 345(Galería Cinerama) local 78, frente a boleterías, El Nido Clothes and Games y atienden de lunes a viernes de",
        x: -31.412261,
        y: -64.187968
    },
    
]


