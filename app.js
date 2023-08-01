window.addEventListener("load",inicio);

function inicio() {
/*     hover(); */
    hoverArrowProject();
    scrollAnimation();
}

/* 
 // hecho con CSS

function hover() {
    let botones = document.getElementsByClassName("boton");
    
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("mouseover",blanco);
        botones[i].addEventListener("mouseout",negro);  
    } 

    function blanco(event) {
        
        if(event.target.nodeName == "svg") {
            event.target.setAttribute("stroke","#fff");
            event.target.setAttribute("fill","#fff");
        } else if(event.target.nodeName == "path") {
            event.target.parentElement.setAttribute("stroke","#fff");
            event.target.parentElement.setAttribute("fill","#fff");
        }

    }

    function negro(event) {

        if(event.target.nodeName == "svg") {
            event.target.setAttribute("stroke","currentColor");
            event.target.setAttribute("fill","currentColor");    
        } 
    }
} */

function hoverArrowProject() {
    let flechas = document.getElementsByClassName("project__link");
    
    for (let i = 0; i < flechas.length; i++) {
        flechas[i].addEventListener("mouseover",blanco);
        flechas[i].addEventListener("mouseout",negro);  
    } 

    function blanco(event) {
        
        if(event.target.nodeName == "path") {
            event.target.setAttribute("stroke","#fff");
        }

    }

    function negro(event) {

        if(event.target.nodeName == "path") {
            event.target.setAttribute("stroke","currentColor"); 
        } 
    }
} 

function scrollAnimation() {
    const projectListSection = document.getElementById("projects");
    const skillsSection = document.getElementById("skills");
    window.addEventListener("scroll", projectListShow);
    
    function projectListShow() {
        let topProjects = projectListSection.getBoundingClientRect().top;
        let windowHeight = window.innerHeight / 2;
        let topSkills = skillsSection.getBoundingClientRect().top;

/*         
        Animando Ambas Cosas

        if(topProjects < windowHeight) {
            projectListSection.classList.add("showScale");
            setTimeout(() => {
                projectListSection.classList.add("pausarAnimacion");
                projectListSection.classList.add("showItem"); 
            }, 1700); 
        } else {
            projectListSection.classList.remove("showList");
        } 
        
        */

        //Animando solo el blur

        if(topProjects < windowHeight) {
            projectListSection.classList.add("showItem");

            setTimeout(() => {
                projectListSection.classList.add("pausarAnimacion"); 
            }, 1700); 
        } else {
            projectListSection.classList.remove("showItem");
        }

        if(topProjects < 0 && topSkills < 100){
            projectListSection.classList.remove("showItem");
        }
        
    }
}