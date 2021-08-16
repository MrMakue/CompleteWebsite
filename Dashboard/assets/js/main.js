/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    // Validate that variables exist
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
            // change icon
            toggleBtn.classList.toggle('bx-x')
        })
    }
}
showMenu('header-toggle','navbar')

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))



let alert_close_icons = document.querySelectorAll('.alert>.close');
if (alert_close_icons) {
    alert_close_icons.forEach((alert_close_icon) => {
        alert_close_icon.addEventListener('click', function () {
            this.closest('.alert').classList.add('close');

            this.closest('.alert').addEventListener('transitionend', function (event) {
                if (event.propertyName == 'transform') {
                    this.remove();
                }
            });
        });
    });
}