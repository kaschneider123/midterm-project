const URL_API = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects'


const obtener_proyectos = async () =>{

    let respuesta = await fetch(URL_API, {
        method: 'GET'
    })
    let proyectos = await respuesta.json()
   
    let uuid_a_buscar = Number(document.URL.split('/').pop().split('.').shift())
    const proyecto_buscado = proyectos.find((proyecto) => proyecto.uuid == uuid_a_buscar)
    let otros_proyectos = proyectos.filter(proyecto => proyecto.uuid != proyecto_buscado.uuid)

    renderizar_detalle(proyecto_buscado)
    renderizar_otros_proyectos(otros_proyectos, "otros-proyectos", "web")
    renderizar_otros_proyectos(otros_proyectos, "otros-proyectos-mobile", "mobile")
}

const renderizar_detalle = (proyecto) => {
    const contenedor_detalle_HTML = document.getElementById('contenedor-detalle')


    /* `` esto es un template string */
    contenedor_detalle_HTML.innerHTML = `
        <div class="title-simplify">
        <h2>${proyecto.name}</h2>
    <div class="sub-title">
        <p>${proyecto.description}</p>
        <p>${proyecto.completed_on}</p>
    </div>        
    </div>
    <div class="card-simplify">
        <img src="${proyecto.image}" alt="" />
    </div>
    <div class="white-parrafo-mobile" >
    <br>${proyecto.content} Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad e dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad e dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nis cillum minim tempor enim. </p>
    </div>
    `
} 

const renderizar_otros_proyectos = (lista_proyectos, id_contenedor, type) =>{
    const otros_proyectos_HTML = document.getElementById(id_contenedor)
    let lista_proyectos_HTML = ''

    lista_proyectos.forEach(proyecto => {

        if(type == 'web'){
               lista_proyectos_HTML += `
        <div class="card">
        <img src="${proyecto.image}" alt="Imagen projecto Dashcoin" />
        <div class="white-background">
          <h4>${proyecto.name}</h4>
          <p>${proyecto.description}</p>
          <a href="./projects/${proyecto.uuid}.html" >Learn more</a>
        </div>
      </div>
        `
    } else if (type == 'mobile') {        
        lista_proyectos_HTML += `        
        <div class="card-hijo">
        <a href="./projects/${proyecto.uuid}.html" >
            <img src="${proyecto.image}" alt="Imagen projecto Vectorify" />
        </a>        
        <h3>${proyecto.name}</h3>
        <p>${proyecto.description}</p>
    </div>
        `

    }
     
    })
    otros_proyectos_HTML.innerHTML = lista_proyectos_HTML
 }


/* Esperamos a que cargue el HTML de la pagina antes de solicitar la informacion de los proyectos */
window.addEventListener("load", function () {
    
    
    obtener_proyectos()
});









