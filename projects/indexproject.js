const URL_API = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects'

const renderizar_proyectos = (lista_proyectos, id_contenedor, type) => {
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

const obtener_proyectos = async () =>{

    let respuesta = await fetch(URL_API, {
        method: 'GET'
    })
    let proyectos = await respuesta.json()
    /* Obtener los primeros 3 proyectos */
    let tres_primeros_proyectos = [...proyectos].splice(proyectos.length - 3, 3)
    renderizar_proyectos(tres_primeros_proyectos, 'proyectos-recientes', 'web')
    renderizar_proyectos(tres_primeros_proyectos, 'proyectos-recientes-mobile', 'mobile')
}

/* Esperamos a que cargue el HTML de la pagina antes de solicitar la informacion de los proyectos */
window.addEventListener("load", function () {
    
    
    obtener_proyectos()
});


/* plantilla para proyecto web
          <div class="card">
            <img src="./assets/projects-section/2.jpg" alt="Imagen projecto Dashcoin" />
            <div class="white-background">
              <h4>Dashcoin</h4>
              <p>Web Development</p>
              <a href="#" >Learn more</a>
            </div>
          </div>

*/