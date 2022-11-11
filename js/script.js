const tab1 = document.querySelector(".tab .skills_tab");
const skills = document.querySelector(".content .skills");

const tab2 = document.querySelector(".tab .contat_tab");
const contatos = document.querySelector(".content .contatos");

const tab3 = document.querySelector(".tab .help_tab");
const help = document.querySelector(".content .help");

tab1.addEventListener("click", e=>{
    skills.classList.add("active");
    contatos.classList.remove("active");
    help.classList.remove("active");
});

tab2.addEventListener("click", e=>{
    skills.classList.remove("active");
    contatos.classList.add("active");
    help.classList.remove("active");
});

tab3.addEventListener("click", e=>{
    skills.classList.remove("active");
    contatos.classList.remove("active");
    help.classList.add("active");
});

