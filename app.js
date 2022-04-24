// MENU Y SECCION ACTIVE 
const sections = document.querySelectorAll(".section");
const list = document.querySelectorAll('.list');
const sectBtns = document.querySelectorAll(".navigation");
const sectBtn = document.querySelectorAll(".indicator");
const allSections = document.querySelector(".main-content");






// Menu animado
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active-btn-nav'));
    this.classList.add('active-btn-nav');
}
list.forEach((item) =>
    item.addEventListener('click', activeLink))


//Section Active
allSections.addEventListener("click", (e) => {

    const id = e.target.dataset.id;
    console.log(e.target);
    if (id) {
        // animar los otros botones con los estilos de active
        // sectBtns.forEach((btn)=> {
        //   btn.classList.remove("active");
        // });
        // e.target.classList.add("active");

        //hide other sections 
        sections.forEach((section) => {
            section.classList.remove("active");
        });

        const element1 = document.getElementById(id);
        element1.classList.add("active");
    }
});

//Toggle theme toggle light-mode
const themeBtn = document.querySelector('.theme-btn')
themeBtn.addEventListener("click", () => {
    const element = document.body;
    element.classList.toggle('light-mode')
})