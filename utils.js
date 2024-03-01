const URL_API = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

async function getProjects() {
    const response = await fetch(URL_API);
    const data = await response.json();
    return data;
}

const renderizar_proyectos = (lista_proyectos, id_contenedor, type) => {
    const otros_proyectos_HTML = document.getElementById(id_contenedor);
    let lista_proyectos_HTML = "";

    lista_proyectos.forEach((proyecto) => {
    if (type == "web") {
        lista_proyectos_HTML += `
        <div class="card">
        <img src="${proyecto.image}" alt="Imagen projecto Dashcoin" />
        <div class="white-background">
        <h4>${proyecto.name}</h4>
        <p>${proyecto.description}</p>
        <a href="./projects/project.html?id=${proyecto.uuid}" >Learn more</a>
        </div>
        </div>
        `;
    } else if (type == "mobile") {
        lista_proyectos_HTML += `        
        <div class="card-hijo">
        <a href="./projects/project.html?id=${proyecto.uuid}" >
            <img src="${proyecto.image}" alt="Imagen projecto Vectorify" />
        </a>        
        <h3>${proyecto.name}</h3>
        <p>${proyecto.description}</p>
    </div>
        `;
    }
    });
    otros_proyectos_HTML.innerHTML = lista_proyectos_HTML;
};

export { renderizar_proyectos, getProjects };
