document.addEventListener("DOMContentLoaded",inicio);

function inicio() {
    hoverArrowProject();
    scrollAnimation();
}

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

        if(topProjects < windowHeight) {
            projectListSection.classList.add("showItem");
            projectListSection.classList.add("pausarAnimacion"); 
        } else {
            projectListSection.classList.remove("showItem");
        }

        if(topProjects < 0 && topSkills < 100){
            projectListSection.classList.remove("showItem");
        }
        
    }
}