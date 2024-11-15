
document.querySelector('.navbar-menu-icon').addEventListener('click', function () {

    const navbar_items = document.querySelector('.navbar-items')

    if (navbar_items.classList.contains('show-modal')) {
        navbar_items.classList.remove('show-modal')
        document.querySelector('.navbar-container').style.flexDirection = "row"
    } else {
        navbar_items.classList.add('show-modal')
        document.querySelector('.navbar-container').style.flexDirection = "column"
    }
})

const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

function toggleDropdown() {

    dropdown.addEventListener("click", (event) => {
        if (window.innerWidth < 1088) {
            dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
        }
    });
}


window.addEventListener( 'DOMContentLoaded', toggleDropdown )
window.addEventListener('resize', () => {
    if (window.innerWidth > 1088) {
        dropdownContent.removeAttribute('style')
    }
} )
