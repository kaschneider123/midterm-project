import { getProjects, renderizar_proyectos } from "../utils.js";

function getProjectId() {
    const searchParam = window.location.search;
    const urlSearchParams = new URLSearchParams(searchParam);
    return urlSearchParams.get("id");
}

/* function showProject(project) {

    const section = document.querySelector('#contenedor-detalle')
    const title = section.querySelector('h2')
    const description = section.querySelector('.sub-title p:first-of-type')
    const image = section.querySelector('.card-simplify img')
    const parrafo = section.querySelector('.white-parrafo-web p')

    title.textContent = project.name
    description.textContent = project.description
    image.src = project.image;
    parrafo.innerHTML = project.content
    
} */

const showProject = (proyecto) => {
    const contenedor_detalle_HTML = document.getElementById("contenedor-detalle");

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
    `;
};

window.onload = async () => {
    const projects = await getProjects();
    const projectId = getProjectId();
    const projectToShow = projects.find((project) => project.uuid === projectId);
    const otherProjects = projects.filter(
    (project) => project.uuid != projectToShow.uuid
    );

    showProject(projectToShow);
    renderizar_proyectos(otherProjects, "otros-proyectos", "web");
    renderizar_proyectos(otherProjects, "otros-proyectos-mobile", "mobile");
};
